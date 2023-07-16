import "./Navigation.css";
import { navigation } from "../../utils/links";
import LinkList from "../Link/LinkList";

const Navigation = ({ status, onClick }) => (
    <nav className={`nav ${status}`}>
        <LinkList links={navigation} onClick={onClick} />
    </nav>
);

export default Navigation;
