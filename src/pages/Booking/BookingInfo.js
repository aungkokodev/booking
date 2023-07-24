import "./Booking.css";
import { useState } from "react";
import { is } from "../../utils/validation";
import Button from "../../components/Button/Button";

const BookingInfo = ({ formData, setFormData, last, updateLast, updateCurrent, goTop }) => {
    const [isFormFocused, setIsFormFocused] = useState(false);

    const handleChange = (key, value) => {
        setFormData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const isButtonDisabled = !(
        is.string(formData.fName) &&
        is.string(formData.lName) &&
        is.email(formData.email) &&
        is.phone(formData.phone)
    );

    const handleFormFocus = () => {
        setIsFormFocused(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        last < 3 && updateLast(3);
        updateCurrent(3);
        goTop();
    };

    return (
        <form
            className="booking-form"
            data-testid="booking-info"
            onFocus={handleFormFocus}
            onSubmit={handleFormSubmit}>
            <p>Please fill contact info</p>
            <div className="input-group-name">
                <div className="input-group">
                    <label htmlFor="booking-fname">First Name</label>
                    <input
                        required
                        type="text"
                        id="booking-fname"
                        value={formData.fName}
                        onChange={(e) => handleChange("fName", e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="booking-lname">Last Name</label>
                    <input
                        required
                        type="text"
                        id="booking-lname"
                        value={formData.lName}
                        onChange={(e) => handleChange("lName", e.target.value)}
                    />
                </div>
                {isFormFocused && !(is.string(formData.fName) && is.string(formData.lName)) && (
                    <p className="input-error">Please enter first and last name</p>
                )}
            </div>
            <div className="input-group">
                <label htmlFor="booking-email">Email</label>
                <input
                    required
                    type="email"
                    id="booking-email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                />
                {isFormFocused && !is.email(formData.email) && (
                    <p className="input-error">Please enter an email in valid format</p>
                )}
            </div>
            <div className="input-group">
                <label htmlFor="booking-phone">Phone</label>
                <input
                    required
                    type="text"
                    id="booking-phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                />
                {isFormFocused && !is.phone(formData.phone) && (
                    <p className="input-error">Please enter a phone number</p>
                )}
            </div>
            <div className="input-group">
                <label htmlFor="booking-special">Any special requests (optional)</label>
                <textarea
                    rows="3"
                    id="booking-special"
                    value={formData.request}
                    onChange={(e) => handleChange("request", e.target.value)}
                />
            </div>
            <Button type="primary" disabled={isButtonDisabled}>
                Continue to confirm
            </Button>
        </form>
    );
};

export default BookingInfo;
