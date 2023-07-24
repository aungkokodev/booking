import "./HeroSection.css";
import { Link } from "react-router-dom";
import restaurant from "../../assets/restauranfood.jpg";
import Button from "../../components/Button/Button";

const HeroSection = () => (
    <section className="hero-section">
        <div className="hero-left">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lobortis nunc.
                Nulla facilisi. Suspendisse luctus lorem velit, sed malesuada. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nullam in lobortis nunc.
            </p>
            <Button type="primary">
                <Link to="/booking">Book now</Link>
            </Button>
        </div>
        <figure className="hero-right">
            <img src={restaurant} alt="food" />
        </figure>
        <div className="backdrop"></div>
    </section>
);

export default HeroSection;
