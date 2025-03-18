import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import BookingItem from "../index";
import { router } from "expo-router";

jest.mock("expo-router", () => ({
  router: {
    push: jest.fn(),
  },
}));

describe("BookingItem", () => {
  const mockBarbershop = {
    id: "1",
    name: "Test Barbershop",
    image: "https://example.com/image.jpg",
    address: "Test Street",
    description: "Test Description",
    city: "Test City",
    state: "TS",
    rating: 5.0,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should renders correctly with barbershop props", () => {
    render(<BookingItem barbershop={mockBarbershop} />);

    expect(screen.getByText("Test Barbershop")).toBeVisible();
    expect(screen.getByText("Test Street, Test City, TS")).toBeVisible();
    expect(screen.getByText("5,0")).toBeVisible();
    expect(screen.getByText("Reservar")).toBeVisible();
  });

  it("should displays barbershop information correctly", () => {
    render(<BookingItem barbershop={mockBarbershop} />);

    expect(screen.getByText(mockBarbershop.name)).toBeVisible();
    expect(
      screen.getByText(
        `${mockBarbershop.address}, ${mockBarbershop.city}, ${mockBarbershop.state}`
      )
    ).toBeVisible();
  });

  it("should navigates to booking page when button is pressed", () => {
    render(<BookingItem barbershop={mockBarbershop} />);

    const bookingButton = screen.getByText("Reservar");
    fireEvent.press(bookingButton);

    expect(router.push).toHaveBeenCalledWith("/(tabs)/home/(booking)/1");
  });
});
