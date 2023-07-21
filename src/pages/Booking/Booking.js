import { Link } from "react-router-dom";

const Booking = () => {
    return (
        <section>
            Booking
            <ul>
                <li>
                    <Link to="reserve">reservation</Link>
                </li>
                <li>
                    <Link to="info">information</Link>
                </li>
                <li>
                    <Link to="confirm">confirm</Link>
                </li>
                <li>
                    <Link to="complete">complete</Link>
                </li>
            </ul>
        </section>
    );
};

export default Booking;
