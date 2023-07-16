import "./Footer.css";
import logo from "../../assets/logo-sm.png";
import { social, navigation, address } from "../../utils/links";
import LinkList from "../Link/LinkList";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/home">
                <img src={logo} alt="Lemon" />
            </Link>
            <section>
                <h4>SOCIALS</h4>
                <LinkList links={social} />
            </section>
            <section>
                <h4>NAVIGATION</h4>
                <LinkList links={navigation} />
            </section>
            <section>
                <h4>CONTACT</h4>
                <LinkList links={address} />
            </section>
        </footer>
    );
};

export default Footer;
