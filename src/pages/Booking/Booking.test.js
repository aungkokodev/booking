import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { fetchAPI, submitAPI } from "../../utils/api";
import { is } from "../../utils/validation";
import Booking from "./Booking";
import BookingInfo from "./BookingInfo";

jest.mock("../../utils/api");
const mockCurrentDate = new Date();
const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const mockFormData = {
    date: "2023/10/23",
    time: "17:00",
    guests: "8",
    location: "Indoor",
    occasion: "Birthday",
    fName: "Joe",
    lName: "Smith",
    phone: "123456789",
    email: "mail@example.org",
    request: "nothing",
};

beforeEach(() => {
    jest.clearAllMocks();
});

afterEach(() => {
    jest.resetAllMocks();
});

describe("BookingForm", () => {
    test("render BookingForm title", () => {
        render(<Booking />);
        const title = screen.getByText("Please choose booking info");
        expect(title).toBeInTheDocument();
    });

    test("HTML5 validation attributes are applied", () => {
        render(<Booking />);
        const dateInput = screen.getByLabelText("Date");
        const timeInput = screen.getByLabelText("Time");
        const guestInput = screen.getByLabelText("Guests");
        const locationInput = screen.getByLabelText("Location");
        expect(dateInput).toHaveAttribute("required");
        expect(dateInput).toHaveAttribute("type", "date");
        expect(timeInput).toHaveAttribute("required");
        expect(guestInput).toHaveAttribute("required");
        expect(guestInput).toHaveAttribute("type", "number");
        expect(guestInput).toHaveAttribute("min", "1");
        expect(guestInput).toHaveAttribute("max", "10");
        expect(locationInput).toHaveAttribute("required");
    });

    test("validation function return true for valid date input", () => {
        const validInput = new Date();
        validInput.setDate(new Date().getDate() + 1);
        expect(is.date(validInput)).toBe(true);
    });

    test("validation function return false for invalid date input", () => {
        expect(is.date(new Date())).toBe(false);
    });

    test("validation function return true for valid time input", () => {
        expect(is.string("17:00")).toBe(true);
    });

    test("validation function return false for invalid time input", () => {
        expect(is.string("")).toBe(false);
    });

    test("validation function return true for valid guest input", () => {
        expect(is.guest("5")).toBe(true);
    });

    test("validation function return false for invalid guest input", () => {
        expect(is.guest("11")).toBe(false);
    });

    test("validation function return true for valid location input", () => {
        expect(is.string("Indoor")).toBe(true);
    });

    test("validation function return false for invalid location input", () => {
        expect(is.string("")).toBe(false);
    });
});

describe("BookingInfo", () => {
    test("render BookingForm title", () => {
        render(<BookingInfo formData={mockFormData} />);
        const title = screen.getByText("Please fill contact info");
        expect(title).toBeInTheDocument();
    });

    test("HTML5 validation attributes are applied", () => {
        render(<BookingInfo formData={mockFormData} />);
        const fName = screen.getByLabelText("First Name");
        const lName = screen.getByLabelText("Last Name");
        const email = screen.getByLabelText("Email");
        const phone = screen.getByLabelText("Phone");
        expect(fName).toHaveAttribute("required");
        expect(lName).toHaveAttribute("required");
        expect(email).toHaveAttribute("required");
        expect(email).toHaveAttribute("type", "email");
        expect(phone).toHaveAttribute("required");
    });

    test("validation function return true for valid name input", () => {
        expect(is.string("Some Name")).toBe(true);
    });

    test("validation function return false for invalid name input", () => {
        expect(is.string("")).toBe(false);
    });

    test("validation function return true for valid email input", () => {
        expect(is.email("mail@example.com")).toBe(true);
    });

    test("validation function return false for invalid email input", () => {
        expect(is.email("mailexamplecom")).toBe(false);
        expect(is.email("mail@examplecom")).toBe(false);
        expect(is.email("mailexample.com")).toBe(false);
    });

    test("validation function return true for valid phone input", () => {
        expect(is.phone("+12-3456789")).toBe(true);
        expect(is.phone("+123456789")).toBe(true);
        expect(is.phone("12-3456789")).toBe(true);
        expect(is.phone("123456789")).toBe(true);
    });

    test("validation function return false for invalid phone input", () => {
        expect(is.email("+12-3456789a")).toBe(false);
        expect(is.email("phonenumber")).toBe(false);
    });
});

describe("Booking Page", () => {
    test("render Booking page heading", () => {
        render(<Booking />);
        const bookingHeader = screen.getByText("Book a Table Now");
        expect(bookingHeader).toBeInTheDocument();
    });

    test("initializeTimes function calls fetchAPI with current date and return an array of availableTimes", () => {
        jest.spyOn(global, "Date").mockImplementation(() => mockCurrentDate);
        const mockFetchAPI = jest.fn().mockReturnValue(mockAvailableTimes);
        fetchAPI.mockImplementation(mockFetchAPI);
        render(<Booking />);
        expect(fetchAPI).toHaveBeenCalledWith(mockCurrentDate);
        expect(fetchAPI).toHaveReturnedWith(mockAvailableTimes);
        expect(mockFetchAPI).toBeCalled();
    });

    test("updateTime function calls fetchAPI with action and return an array of availableTimes", () => {
        render(<Booking />);
        const dateInput = screen.getByLabelText("Date");
        fireEvent.click(dateInput);
        expect(fetchAPI).toHaveBeenCalled();
    });

    test("submitAPI function is called when confirm button is clicked", () => {
        jest.spyOn(React, "useState").mockReturnValue([3, jest.fn()]);
        render(<Booking />);
        const submitBtn = screen.getByText("Confirm Booking");
        fireEvent.click(submitBtn);
        expect(submitAPI).toHaveBeenCalledTimes(1);
    });
});
