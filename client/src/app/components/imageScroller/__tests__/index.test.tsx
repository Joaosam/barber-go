import React from "react";
import { render, screen } from "@testing-library/react-native";
import ImageScroller from "../index";
import BookingItem from "../../bookingItem";

jest.mock("../../bookingItem", () => {
  return jest.fn(() => null);
});

const mockBarbershops = [
  {
    id: "1",
    name: "Barbershop 1",
    description: "Description 1",
    address: "Address 1",
    city: "City 1",
    state: "S1",
    image: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    name: "Barbershop 2",
    description: "Description 2",
    address: "Address 2",
    city: "City 2",
    state: "S2",
    image: "https://example.com/image2.jpg",
  },
];
const mockProps = {
  title: "Popular Barbershops",
  barbershops: mockBarbershops,
};

describe("ImageScroller", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly with all props", () => {
    render(<ImageScroller {...mockProps} />);

    expect(screen.getByText("Popular Barbershops")).toBeVisible();
  });

  it("should display the correct title", () => {
    render(<ImageScroller {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeVisible();
  });

  it("should render the correct number of BookingItem components", () => {
    render(<ImageScroller {...mockProps} />);

    expect(BookingItem).toHaveBeenCalledTimes(2);
  });

  it("should pass the correct props to each BookingItem", () => {
    render(<ImageScroller {...mockProps} />);

    expect(BookingItem).toHaveBeenCalledWith(
      { barbershop: mockBarbershops[0] },
      expect.anything()
    );
    expect(BookingItem).toHaveBeenCalledWith(
      { barbershop: mockBarbershops[1] },
      expect.anything()
    );
  });

  it("should handle empty barbershops array", () => {
    render(<ImageScroller title="No Barbershops" barbershops={[]} />);

    expect(screen.getByText("No Barbershops")).toBeVisible();
    expect(BookingItem).not.toHaveBeenCalled();
  });
});
