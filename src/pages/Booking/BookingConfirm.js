import "./Booking.css";
import Button from "../../components/Button/Button";

const BookingConfirm = ({ formData, submitForm, last, updateLast, updateCurrent, goTop }) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitForm();
        last < 4 && updateLast(4);
        updateCurrent(4);
        goTop();
    };

    return (
        <form className="booking-form" onSubmit={handleFormSubmit} data-testid="booking-confirm">
            <p>Please confirm booking</p>
            <p>Booking info</p>
            <div className="info-group">
                <p className="info-label">Date</p>
                <p>{formData.date}</p>
            </div>
            <div className="info-group">
                <p className="info-label">Time</p>
                <p>{formData.time}</p>
            </div>
            <div className="info-group">
                <p className="info-label">Guests</p>
                <p>{formData.guests} people</p>
            </div>
            <div className="info-group">
                <p className="info-label">Location</p>
                <p>{formData.location}</p>
            </div>
            {formData.occasion && (
                <div className="info-group">
                    <p className="info-label">Occasion</p>
                    <p>{formData.occasion}</p>
                </div>
            )}
            <p>Contact info</p>
            <div className="info-group">
                <p className="info-label">Name</p>
                <p>
                    {formData.fName} {formData.lName}
                </p>
            </div>
            <div className="info-group">
                <p className="info-label">Email</p>
                <p>{formData.email}</p>
            </div>
            <div className="info-group">
                <p className="info-label">Phone</p>
                <p>{formData.phone}</p>
            </div>
            {formData.request && (
                <div className="info-group">
                    <p className="info-label">Requests</p>
                    <p>{formData.request}</p>
                </div>
            )}
            <Button type="primary">Confirm Booking</Button>
        </form>
    );
};

export default BookingConfirm;
