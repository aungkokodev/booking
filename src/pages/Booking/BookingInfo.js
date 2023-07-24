import "./Booking.css";
import Button from "../../components/Button/Button";

const BookingInfo = ({ formData, setFormData, last, updateLast, updateCurrent, goTop }) => {
    const handleChange = (key, value) => {
        setFormData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        last < 3 && updateLast(3);
        updateCurrent(3);
        goTop();
    };

    return (
        <form className="booking-form" onSubmit={handleFormSubmit} data-testid="booking-info">
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
            <Button type="primary">Continue to confirm</Button>
        </form>
    );
};

export default BookingInfo;
