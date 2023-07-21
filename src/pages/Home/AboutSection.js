import "./AboutSection.css";
import about_1 from "../../assets/about-1.jpg";
import about_2 from "../../assets/about-2.jpg";

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-section-left">
                <h2>Little Lemon Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lobortis
                    nunc. Nulla facilisi. Suspendisse luctus lorem velit, sed malesuada. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nullam in lobortis nunc. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lobortis nunc.
                    Nulla facilisi. Suspendisse luctus lorem velit, sed malesuada. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Nullam in lobortis nunc. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nullam in lobortis nunc.
                </p>
            </div>
            <div className="about-section-right">
                <figure>
                    <img src={about_1} alt="chefs" />
                </figure>
                <figure className="top">
                    <img src={about_2} alt="chefs" />
                </figure>
            </div>
        </section>
    );
};

export default AboutSection;
