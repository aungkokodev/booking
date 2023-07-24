import "./Button.css";

const Button = ({ type, disabled, onClick, children, ...props }) => {
    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <button className={`btn ${type}`} disabled={disabled} onClick={handleClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
