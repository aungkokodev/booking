import "./FoodCard.css";
import { Link } from "react-router-dom";

const FoodCard = ({ image, title, price, desc, link, linkText }) => {
    return (
        <article className="food-card">
            <figure>
                <img src={image} alt={image} />
            </figure>
            <div className="food-card-body">
                <div className="food-card-title">
                    <h3>{title}</h3>
                    <span>${price}</span>
                </div>
                <p>{desc}</p>
                <Link to={link}>{linkText}</Link>
            </div>
        </article>
    );
};

export default FoodCard;
