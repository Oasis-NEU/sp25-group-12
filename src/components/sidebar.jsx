import './sidebar.css';

function Sidebar() {
    return (
        <div className="navbar">
            <a href="#home">Home</a>
            <a href="#course1">Course 1</a>
            <a href="#course2">Course 2</a>
            <a href="#course3">Course 3</a>
            <button className="dropdown-btn">
                Study Methods
                <i className="study-methods"></i>
            </button>
            <div className="dropdown-container">
                <a href="#pomodoro">Pomodoro</a>
            </div>
        </div>
    )
}

export default Sidebar;
