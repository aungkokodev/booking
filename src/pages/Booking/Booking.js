import { useReducer, useState, useRef } from "react";
import { fetchAPI, submitAPI } from "../../utils/api";
import Progress from "../../components/Progress/Progress";
import BookingForm from "./BookingForm";
import BookingInfo from "./BookingInfo";
import BookingConfirm from "./BookingConfirm";
import BookingCompleted from "./BookingCompleted";

const initialFormData = {
    date: "",
    time: "",
    guests: 0,
    location: "",
    occasion: "",
    fName: "",
    lName: "",
    phone: "",
    email: "",
    request: "",
};

const Booking = () => {
    const [current, updateCurrent] = useState(1);
    const [last, updateLast] = useState(1);

    const initializeTimes = () => fetchAPI(new Date());
    const updateTime = (state, action) => fetchAPI(new Date(action.payload));
    const [formData, setFormData] = useState(initialFormData);
    const [availableTimes, timesDispatch] = useReducer(updateTime, initializeTimes());

    const booking = useRef();
    const goTop = () => booking.current.scrollIntoView();

    const submitForm = () => submitAPI(formData);

    const bookingState = {
        last,
        updateLast,
        current,
        updateCurrent,
        goTop,
    };

    let componentToShow;

    switch (current) {
        case 1:
            componentToShow = (
                <BookingForm
                    availableTimes={availableTimes}
                    timesDispatch={timesDispatch}
                    formData={formData}
                    setFormData={setFormData}
                    {...bookingState}
                />
            );
            break;
        case 2:
            componentToShow = (
                <BookingInfo formData={formData} setFormData={setFormData} {...bookingState} />
            );
            break;
        case 3:
            componentToShow = (
                <BookingConfirm formData={formData} submitForm={submitForm} {...bookingState} />
            );
            break;
        case 4:
            componentToShow = <BookingCompleted {...bookingState} />;
            break;
        default:
    }

    return (
        <section className="booking-section" ref={booking}>
            <div className="booking-section-header">
                <h2>{current !== 4 ? "Book a Table Now" : "Booking Completed"}</h2>
            </div>
            <div className="booking-section-body">
                {current !== 4 && <Progress {...bookingState} />}
                {componentToShow}
            </div>
        </section>
    );
};

export default Booking;
