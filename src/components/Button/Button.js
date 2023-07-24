import "./Button.css";

const Button = ({ type, onClick, children, ...props }) => {
    // const navigate = useNavigate();

    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <button className={`btn ${type}`} onClick={handleClick} {...props}>
            {children}
        </button>
    );
};

export default Button;
