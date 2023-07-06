import { AddTaskComponent } from "../components/add-task/add-task.component"
import { SearchComponent } from "../components/search/search.component"
import { TasksComponent } from "../components/tasks/tasks.component"

export const MainLayout = ({tasks, handleTaskStateChange, handleAdd, handleSearch, setDragId, handleDrop}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6"><AddTaskComponent handleAdd={handleAdd} /></div>
                <div className="col-6"><SearchComponent handleSearch={handleSearch} /></div>
            </div>
            <div className="row">
                <div className="col-6"><TasksComponent tasks={tasks.filter(task=>task.selected === false)} 
                    handleTaskStateChange={handleTaskStateChange} setDragId={setDragId}
                    handleDrop={handleDrop}>To Do</TasksComponent></div>
                <div className="col-6"><TasksComponent tasks={tasks.filter(task=>task.selected === true)} 
                    handleTaskStateChange={handleTaskStateChange} setDragId={setDragId}
                    handleDrop={handleDrop}>Done</TasksComponent></div>
            </div>

        </div>
    )
}