import "./Progress.css";

const Progress = ({ current, last, updateCurrent }) => {
    const getClass = (index) => `${index <= current && "active"} ${index <= last && "clickable"}`;

    const goTo = (index) => {
        index <= last && updateCurrent(index);
    };

    return (
        <div className="progress">
            <div className={`progress-circle ${getClass(1)}`} onClick={() => goTo(1)}>
                1
            </div>
            <div className={`progress-line ${getClass(2)}`}></div>
            <div className={`progress-circle ${getClass(2)}`} onClick={() => goTo(2)}>
                2
            </div>
            <div className={`progress-line ${getClass(3)}`}></div>
            <div className={`progress-circle ${getClass(3)}`} onClick={() => goTo(3)}>
                3
            </div>
        </div>
    );
};

export default Progress;
