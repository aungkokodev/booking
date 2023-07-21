import Rating from "../Star/Rating";
import "./ReviewCard.css";

const ReviewCard = ({ avatar, name, rating, review }) => {
    return (
        <article className="review-card">
            <figure>
                <img src={avatar} alt="" />
            </figure>
            <div className="review-card-body">
                <h3>{name}</h3>
                <Rating rating={rating} />
                <p>
                    <sup>
                        <i className="fa-solid fa-quote-left" />
                    </sup>
                    {` ${review} `}
                    <sup>
                        <i className="fa-solid fa-quote-right" />
                    </sup>
                </p>
            </div>
        </article>
    );
};

export default ReviewCard;
