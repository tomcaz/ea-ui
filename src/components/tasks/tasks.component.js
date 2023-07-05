import { TaskComponent } from "./task.component"
import './task.styles.css';

export const TasksComponent = ({children, tasks, handleTaskStateChange}) => {
    return (
        <div className="tasks">
            <h2>{children}</h2>
            <hr />
            {tasks.map(task=> (
            <TaskComponent text={task.text} key={task.id} handleClick={handleTaskStateChange} {...task} />
            ))}
        </div>
    )
}