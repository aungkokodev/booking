import "./Booking.css";
import Button from "../../components/Button/Button";

const BookingForm = ({
    formData,
    setFormData,
    availableTimes,
    timesDispatch,
    last,
    updateLast,
    updateCurrent,
    goTop,
}) => {
    const handleChange = (key, value) => {
        setFormData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        last < 2 && updateLast(2);
        updateCurrent(2);
        goTop();
    };

    return (
        <form className="booking-form" onSubmit={handleFormSubmit} data-testid="booking-form">
            <p>Please choose booking info</p>
            <div className="input-group">
                <label htmlFor="booking-date">Date</label>
                <input
                    required
                    type="date"
                    id="booking-date"
                    value={formData.date}
                    onChange={(e) => {
                        handleChange("date", e.target.value);
                        timesDispatch({ type: "UPDATE", payload: e.target.value });
                    }}
                />
            </div>
            <div className="input-group">
                <label htmlFor="booking-time">Time</label>
                <select
                    required
                    id="booking-time"
                    value={formData.time}
                    onChange={(e) => handleChange("time", e.target.value)}>
                    {!formData.time && <option value="">Choose Time</option>}
                    {availableTimes?.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="booking-guests">Guests</label>
                <input
                    required
                    min="1"
                    max="10"
                    type="number"
                    id="booking-guests"
                    value={formData.guests}
                    onChange={(e) => handleChange("guests", e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="booking-location">Location</label>
                <select
                    required
                    id="booking-location"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}>
                    {!formData.location && <option value="">Choose Location</option>}
                    <option>Indoor</option>
                    <option>Outdoor</option>
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="booking-occasion">Occasion (optional)</label>
                <select
                    id="booking-occasion"
                    value={formData.occasion}
                    onChange={(e) => handleChange("occasion", e.target.value)}>
                    {!formData.occasion && <option value="">Choose Occasion</option>}
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <Button type="primary">Continue</Button>
        </form>
    );
};

export default BookingForm;
