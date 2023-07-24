import React from "react";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { fetchAPI, submitAPI } from "../../utils/api";
import Booking from "./Booking";
import BookingConfirm from "./BookingConfirm";
import BookingCompleted from "./BookingCompleted";

jest.mock("../../utils/api");
const mockCurrentDate = new Date();
const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const mockFormData = {
    date: "2023/12/22",
    time: "19:00",
    guests: 5,
    location: "Indoor",
    occasion: "Birthday",
    fName: "First",
    lName: "Last",
    phone: "123456789",
    email: "mail@some.com",
    request: "nothing",
};

beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(global, "Date").mockImplementation(() => mockCurrentDate);
});

afterEach(() => {
    jest.resetAllMocks();
});

describe("Booking Page", () => {
    test("render Booking page heading", () => {
        render(<Booking />);
        const bookingHeader = screen.getByText("Book a Table Now");
        expect(bookingHeader).toBeInTheDocument();
    });

    test("initializeTimes function calls fetchAPI with current date and return an array of availableTimes", () => {
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
});

// describe("BookingConfirm Component", () => {
//     test("render title and button", () => {
//         render(<BookingConfirm formData={mockFormData} />);
//         const title = screen.getByText("Please confirm booking");
//         const button = screen.getByText("Confirm Booking");
//         const date = screen.getByText("Date");
//         const time = screen.getByText("Time");
//         const guests = screen.getByText("Guests");
//         const location = screen.getByText("Location");
//         const occasion = screen.getByText("Occasion");
//         const name = screen.getByText("Name");
//         const email = screen.getByText("Email");
//         const phone = screen.getByText("Phone");
//         const request = screen.getByText("Requests");
//         expect(title).toBeInTheDocument();
//         expect(date).toBeInTheDocument();
//         expect(time).toBeInTheDocument();
//         expect(guests).toBeInTheDocument();
//         expect(location).toBeInTheDocument();
//         expect(occasion).toBeInTheDocument();
//         expect(name).toBeInTheDocument();
//         expect(email).toBeInTheDocument();
//         expect(phone).toBeInTheDocument();
//         expect(request).toBeInTheDocument();
//         expect(button).toBeInTheDocument();
//     });
// });

// describe("BookingComplete Component", () => {
//     test("render title and button", () => {
//         render(<BookingCompleted />, { wrapper: BrowserRouter });
//         const title = screen.getByText("Thanks for booking a table");
//         const button = screen.getByText("Back to Home");
//         expect(title).toBeInTheDocument();
//         expect(button).toBeInTheDocument();
//     });
// });
