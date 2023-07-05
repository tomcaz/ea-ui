import { AddTaskComponent } from "../components/add-task/add-task.component"
import { SearchComponent } from "../components/search/search.component"
import { TasksComponent } from "../components/tasks/tasks.component"

export const MainLayout = ({tasks, handleTaskStateChange, handleAdd, handleSearch}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6"><AddTaskComponent handleAdd={handleAdd} /></div>
                <div className="col-6"><SearchComponent handleSearch={handleSearch} /></div>
            </div>
            <div className="row">
                <div className="col-6"><TasksComponent tasks={tasks.filter(task=>task.checked === false)} handleTaskStateChange={handleTaskStateChange}>To Do</TasksComponent></div>
                <div className="col-6"><TasksComponent tasks={tasks.filter(task=>task.checked === true)} handleTaskStateChange={handleTaskStateChange}>Done</TasksComponent></div>
            </div>

        </div>
    )
}