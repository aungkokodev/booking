import { Link } from "react-router-dom";

const LinkList = ({ links, onClick }) => (
    <ul>
        {links.map((link) => (
            <li key={link.text} onClick={onClick}>
                <Link to={link.to} target={link.target}>
                    {link.text}
                </Link>
            </li>
        ))}
    </ul>
);

export default LinkList;
