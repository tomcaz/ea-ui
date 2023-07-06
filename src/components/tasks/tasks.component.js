import { useState } from "react";
import { TaskComponent } from "./task.component"
import './task.styles.css';

export const TasksComponent = ({children, tasks, handleTaskStateChange, setDragId, handleDrop}) => {
    const [dragging, setDragging] =  useState(false);
    const onDrop = (event) => {
        event.preventDefault();
        setDragging(false)
        handleDrop();
    }
    return (
        <div className="tasks">
            <h2>{children}</h2>
            <hr />
            <div className={`dropHolder${dragging? ' dragging': ''}`} onDrop={onDrop} 
                onDragEnd={event=> setDragging(false)}
                onDragLeave={event=> setDragging(false)}
                onDragOver={event=> { event.preventDefault(); setDragging(true)}}>
                {tasks.map(task=> (
                <TaskComponent text={task.text} key={task.id} handleClick={handleTaskStateChange} {...task} setDragId={setDragId} />
                ))}
            </div>
        </div>
    )
}