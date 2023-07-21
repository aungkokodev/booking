import { Route, Routes } from "react-router-dom";
import "./Main.css";
import Home from "../../pages/Home/Home";
import Booking from "../../pages/Booking/Booking";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/booking">
                    <Route index element={<Booking />} />
                    <Route path="reserve" element={<section>Reservation</section>} />
                    <Route path="info" element={<section>Information</section>} />
                    <Route path="confirm" element={<section>Confirm</section>} />
                    <Route path="complete" element={<section>Completed</section>} />
                </Route>
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    );
};

export default Main;
