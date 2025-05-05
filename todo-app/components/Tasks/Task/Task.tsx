import { FC, useState } from "react";
import type { ITaskTypes } from "../../../interfaces/ITaskTypes";

export const Task: FC<ITaskTypes> = ({ id, title, description, onDeleteTaskHandler, hasEditMode = false, setEditMode, onEditHandler }: ITaskTypes) => {

    const [editor, setEditor] = useState("");
    const onEditorHandler = (value) => {
        
        
        setEditor(value)
    }

// export const Task = ({ id, title, children }) => {
    return (
        <article>
            <div>
                {/* <h3>{id}</h3> */}
                <h2>{title}</h2>

                <section className={hasEditMode ? "shown-hidden-input" : "hidden-input"}>
                    <input onChange={(e) => onEditorHandler(e.target.value)} type="text" value={editor}/>
                    <button onClick={() => onEditHandler(id, editor)}>Change</button>
                </section>

                <p>{description}</p>
            </div>

            <button onClick={setEditMode}>Edit Titile</button>
            <button onClick={() => {
                onDeleteTaskHandler(id)
            }}>Delete</button>
        </article>
    )
}