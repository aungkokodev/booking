import "./ContactSection.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const ContactSection = () => (
    <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lobortis nunc. Nulla
            facilisi. Suspendisse luctus lorem velit, sed malesuada. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam in lobortis nunc. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam in lobortis nunc. Nulla facilisi. Suspendisse luctus
            lorem velit, sed malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam in lobortis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            in lobortis nunc.
        </p>
        <Button type="primary" to="/about">
            <Link to="/about">Contact now</Link>
        </Button>
    </section>
);

export default ContactSection;
