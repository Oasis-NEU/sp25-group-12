import './tasks.css';

function Tasks() {
    return (
        <div className="tasks-container">
            <h1 className="tasks-title">To-Do List</h1>
            <ul className="tasks-list">
                <li>
                    <input type="checkbox" />
                    <span className="task-name">First</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">Second</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">Third</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">Fourth</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">One Two Three</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">One Two Three Four</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">Task</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">Task</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">Task</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="task-name">Task</span>
                    <span className="dots"></span>
                    <span className="task-date">3/05/25</span>
                </li>
            </ul>
        </div>
    );
}

export default Tasks;
