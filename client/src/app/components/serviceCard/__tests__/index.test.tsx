import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import ServiceCard from "../index";
import { router } from "expo-router";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

const mockService = {
  id: "1",
  name: "Corte de Cabelo",
  price: 35.0,
  description: "Corte moderno com tesoura e máquina",
  imageUrl: "https://example.com/image.jpg",
  barberShopName: "Barbearia Teste",
};

describe("ServiceCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with all props", () => {
    render(<ServiceCard {...mockService} />);

    expect(screen.getByText(mockService.name)).toBeVisible();
    expect(screen.getByText(mockService.description)).toBeVisible();
    expect(
      screen.getByText(`R$ ${mockService.price.toFixed(2)}`)
    ).toBeVisible();
    expect(screen.getByText("Agendar")).toBeVisible();
  });

  it("should display service information correctly", () => {
    render(<ServiceCard {...mockService} />);

    expect(screen.getByText(mockService.name)).toBeVisible();
    expect(screen.getByText(mockService.description)).toBeVisible();
    expect(
      screen.getByText(`R$ ${mockService.price.toFixed(2)}`)
    ).toBeVisible();
  });

  it("should navigate to booking page when button is pressed", () => {
    render(<ServiceCard {...mockService} />);

    const bookButton = screen.getByText("Agendar");
    fireEvent.press(bookButton);

    expect(router.push).toHaveBeenCalledWith({
      pathname: "/(tabs)/home/(booking)/(services)/[id]",
      params: {
        id: mockService.id,
        barberShopName: mockService.barberShopName,
      },
    });
  });

  it("should handle service without barberShopName", () => {
    const serviceWithoutBarberShop = {
      ...mockService,
      barberShopName: undefined,
    };

    render(<ServiceCard {...serviceWithoutBarberShop} />);

    const bookButton = screen.getByText("Agendar");
    fireEvent.press(bookButton);

    expect(router.push).toHaveBeenCalledWith({
      pathname: "/(tabs)/home/(booking)/(services)/[id]",
      params: { id: mockService.id, barberShopName: undefined },
    });
  });

  it("should display the correct price format", () => {
    const serviceWithDecimal = { ...mockService, price: 35.5 };

    render(<ServiceCard {...serviceWithDecimal} />);

    expect(screen.getByText(`R$ 35.50`)).toBeVisible();
  });
});
