import "./Rating.css";

const Rating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<i key={i} className={`fa-star fa-${i < rating ? "solid" : "regular"}`} />);
    }

    return <div className="rating">{stars}</div>;
};

export default Rating;
