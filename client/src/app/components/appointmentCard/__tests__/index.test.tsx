import { render, fireEvent, screen } from "@testing-library/react-native";
import AppointmentCard from "..";
import { Animated } from "react-native";

const mockCompletedAppointment = {
  id: "1",
  serviceName: "Corte de Cabelo",
  barbershopName: "Barbearia do Zé",
  barbershopImage: "https://www.barbershop.com/image.jpg",
  date: "15 Jan",
  time: "09:00",
  price: 30,
  status: "completed",
};
const mockActiveAppointment = {
  id: "2",
  serviceName: "Barba",
  barbershopName: "Barber Shop",
  barbershopImage: "https://www.barbershop.com/image2.jpg",
  date: "20 Fev",
  time: "14:30",
  price: 25,
  status: "confirmed",
};
const mockOnPress = jest.fn();
jest.spyOn(Animated, "loop").mockImplementation((_) => {
  return {
    start: jest.fn(),
    stop: jest.fn(),
    reset: jest.fn(),
  };
});

describe("AppointmentCard", () => {
  it("should be render completed appointment correctly", () => {
    render(
      <AppointmentCard
        appointment={mockCompletedAppointment}
        onPress={mockOnPress}
      />
    );

    expect(screen.getByText("Finalizado")).toBeVisible();
    expect(screen.getByText("Corte de Cabelo")).toBeVisible();
    expect(screen.getByText("Barbearia do Zé")).toBeVisible();
    expect(screen.getByText("Jan")).toBeVisible();
    expect(screen.getByText("15")).toBeVisible();
    expect(screen.getByText("09:00")).toBeVisible();
    expect(screen.getByText("Avaliar")).toBeVisible();
  });

  it("should be renders active appointment correctly", () => {
    render(
      <AppointmentCard
        appointment={mockActiveAppointment}
        onPress={mockOnPress}
      />
    );

    expect(screen.getByText("Confirmado")).toBeVisible();
    expect(screen.getByText("Barba")).toBeVisible();
    expect(screen.getByText("Barber Shop")).toBeVisible();
    expect(screen.getByText("Fev")).toBeVisible();
    expect(screen.getByText("20")).toBeVisible();
    expect(screen.getByText("14:30")).toBeVisible();
    expect(screen.queryByText("Avaliar")).toBeNull();
  });

  it("should be creates the correct date display from date string", () => {
    render(
      <AppointmentCard
        appointment={{
          ...mockCompletedAppointment,
          date: "05 Mar",
        }}
        onPress={mockOnPress}
      />
    );

    expect(screen.getByText("05")).toBeVisible();
    expect(screen.getByText("Mar")).toBeVisible();
  });

  it("should be calls onPress handler with the correct appointment", async () => {
    render(
      <AppointmentCard
        appointment={mockCompletedAppointment}
        onPress={mockOnPress}
      />
    );

    fireEvent.press(screen.getByTestId("appointment-card"));

    expect(mockOnPress).toHaveBeenCalledWith(mockCompletedAppointment);
  });

  it("should be shows star icon with the 'Avaliar' text for completed appointments", () => {
    render(
      <AppointmentCard
        appointment={mockCompletedAppointment}
        onPress={mockOnPress}
      />
    );

    expect(screen.getByText("star")).toBeVisible(); // This will find the mocked icon
    expect(screen.getByText("Avaliar")).toBeVisible();
  });
});
