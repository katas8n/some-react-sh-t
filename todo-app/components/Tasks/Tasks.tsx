import type { ITaskTypes as TaskType } from "../../interfaces/ITaskTypes";
import { Task } from "./Task/Task";

interface ITasksTypes {
    tasks: TaskType[],
    onDeleteTaskHandler? : (id:number) => void,
    hasEditMode: boolean,
    setEditMode: () => void,
    onEditHandler: (id: number, value: string) => void
}

export const Tasks = ({ tasks, onDeleteTaskHandler, hasEditMode, setEditMode, onEditHandler }: ITasksTypes) => {
    return tasks.map((task) => {
        return (
            <Task key={task.id} title={task.title} id={task.id} description={task.description} onDeleteTaskHandler={onDeleteTaskHandler} setEditMode={setEditMode} hasEditMode={hasEditMode} onEditHandler={onEditHandler}/>
        )
    })
};