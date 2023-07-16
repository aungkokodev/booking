import "./Hamburger.css";

const Hamburger = ({ status, onClick }) => (
    <div className={`hamburger ${status}`} onClick={onClick}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
    </div>
);

export default Hamburger;
