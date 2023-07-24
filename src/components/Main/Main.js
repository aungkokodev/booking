import { Navigate, Route, Routes } from "react-router-dom";
import "./Main.css";
import Home from "../../pages/Home/Home";
import Booking from "../../pages/Booking/Booking";

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </main>
    );
};

export default Main;
