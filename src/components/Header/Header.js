import "./Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import logo from "../../assets/logo.png";
import basket from "../../assets/basket.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    const [status, setStaus] = useState();

    const toggleStatus = () => setStaus((prev) => (prev === "active" ? "" : "active"));

    const handleChange = (e) => {
        e.target.innerWidth >= 768 && setStaus("");
    };

    useEffect(() => {
        window.addEventListener("resize", handleChange);

        return () => window.removeEventListener("resize", handleChange);
    }, []);

    return (
        <header className="header">
            <Hamburger status={status} onClick={toggleStatus} />
            <Link to="/home">
                <img src={logo} alt="Lemon" className="logo" />
            </Link>
            <Navigation status={status} onClick={toggleStatus} />
            <Link to="order">
                <img src={basket} alt="Basket" className="basket" />
            </Link>
        </header>
    );
};

export default Header;
