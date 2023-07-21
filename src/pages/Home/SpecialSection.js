import "./SpecialSection.css";
import { foods } from "../../utils/foods";
import Button from "../../components/Button/Button";
import FoodCard from "../../components/Card/FoodCard";

const SpecialSection = () => {
    return (
        <section className="special-section">
            <div className="special-section-header">
                <h2>Weekend Specials</h2>
                <Button type="secondary">Explore menu</Button>
            </div>
            <div className="special-section-body">
                {foods.map((food) => (
                    <FoodCard
                        key={food.title}
                        image={food.image}
                        title={food.title}
                        price={food.price}
                        desc={food.desc}
                        link={"/order"}
                        linkText={`Order now ${String.fromCharCode(8594)}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default SpecialSection;
