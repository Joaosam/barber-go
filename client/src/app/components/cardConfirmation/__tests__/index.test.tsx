import React from "react";
import { render, screen } from "@testing-library/react-native";
import CardConfirmation from "../index";
import { formatDate } from "@/utils/formatDate";

const mockProps = {
  serviceName: "Corte de Cabelo",
  price: 35.0,
  date: new Date("2023-07-25").getTime(),
  time: "14:30",
  barbershopName: "Barbearia Teste",
};

describe("CardConfirmation", () => {
  it("should render correctly with all props", () => {
    render(<CardConfirmation {...mockProps} />);

    expect(screen.getByText(mockProps.serviceName)).toBeVisible();
    expect(
      screen.getByText(`R$ ${mockProps.price.toFixed(2).replace(".", ",")}`)
    ).toBeVisible();
    expect(screen.getByText(formatDate(mockProps.date))).toBeVisible();
    expect(screen.getByText(mockProps.time)).toBeVisible();
    expect(screen.getByText(mockProps.barbershopName)).toBeVisible();
  });

  it("should display service information correctly", () => {
    render(<CardConfirmation {...mockProps} />);

    expect(screen.getByText(mockProps.serviceName)).toBeVisible();
    expect(
      screen.getByText(`R$ ${mockProps.price.toFixed(2).replace(".", ",")}`)
    ).toBeVisible();
  });

  it("should display date and time correctly", () => {
    render(<CardConfirmation {...mockProps} />);

    expect(screen.getByText(formatDate(mockProps.date))).toBeVisible();
    expect(screen.getByText(mockProps.time)).toBeVisible();
  });

  it("should display barbershop name correctly", () => {
    render(<CardConfirmation {...mockProps} />);

    expect(screen.getByText(mockProps.barbershopName)).toBeVisible();
  });

  it("should not display date section when date is not provided", () => {
    const propsWithoutDate = {
      ...mockProps,
      date: undefined,
    };

    render(<CardConfirmation {...propsWithoutDate} />);

    expect(screen.queryByText("Data")).toBeNull();
  });

  it("should not display time section when time is not provided", () => {
    const propsWithoutTime = {
      ...mockProps,
      time: "",
    };

    render(<CardConfirmation {...propsWithoutTime} />);

    expect(screen.queryByText("Horário")).toBeNull();
  });
});
