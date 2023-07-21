import "./Button.css";

const Button = ({ type, onClick, children }) => {
    return (
        <button className={`btn ${type}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
