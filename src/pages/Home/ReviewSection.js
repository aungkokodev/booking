import "./ReviewSection.css";
import { useEffect, useRef } from "react";
import { reviews } from "../../utils/reviews";
import ReviewCard from "../../components/Card/ReviewCard";

const ReviewSection = () => {
    const scrollDiv = useRef();
    const handleScroll = (direction = 1) => {
        const increment = 252 * direction;
        const scrollWidth = scrollDiv.current.scrollWidth;
        const elementWidth = scrollDiv.current.clientWidth;
        const maxScroll = scrollWidth - elementWidth;
        const currentScrollPosition = scrollDiv.current.scrollLeft;
        const nextScrollPosition =
            currentScrollPosition >= maxScroll ? 0 : currentScrollPosition + increment;
        scrollDiv.current.scrollLeft = nextScrollPosition;
    };

    useEffect(() => {
        const timeout = setInterval(handleScroll, 5000);
        return () => {
            clearInterval(timeout);
        };
    }, []);

    return (
        <section className="review-section">
            <h2 className="review-section-header">Customer Reviews</h2>
            <div className="review-section-body">
                <span
                    className="review-prev fa-solid fa-less-than"
                    onClick={() => handleScroll(-1)}
                />
                <div ref={scrollDiv} className="review-scroll-container">
                    {reviews.map((review) => (
                        <ReviewCard {...review} key={review.name} />
                    ))}
                </div>
                <span
                    className="review-next fa-solid fa-greater-than"
                    onClick={() => handleScroll(1)}
                />
            </div>
        </section>
    );
};

export default ReviewSection;
