import "./Booking.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const BookingCompleted = () => {
    return (
        <>
            <form
                className="booking-form"
                onSubmit={(e) => e.preventDefault()}
                data-testid="booking-completed">
                <p style={{ textAlign: "center" }}>Thanks for booking a table</p>
                <Button type="primary">
                    <Link to="/home">Back to Home</Link>
                </Button>
            </form>
        </>
    );
};

export default BookingCompleted;
