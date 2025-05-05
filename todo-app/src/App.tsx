import './App.css'

import { useState } from 'react'
import { Tasks } from "../components/Tasks/Tasks"
import { tasks as mockTasks } from "../constants/tasks"

// Components slipting 

export const App = () => {
  const [tasks, setTasks] = useState(mockTasks)
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [hasEditMode, setHasEditMode] = useState(false);

  const setEditMode = () => {
    setHasEditMode(prev => !prev);
  }
  
  const onEditHandler = (id: number, value: string) => {
    setTasks((prevState) => {
       return prevState.map(task => {
        if(task.id === id) {
          task.title = value;

          return task; 
        }

        return task;
      })
    })

    setEditMode();
  }

  const onTitleChangeHandler = (value) => {
    
    setTitle(value)
  }

  const onDescriptionChangeHandler = (value) => {
    console.log(value);
    
    setDescription(value)
  }

  const onAddTaskHandler = () => {
    const newId = Math.random(); 

    const newTask = {
      id: +newId.toString().slice(3, 10),
      title,
      description
    };

    setTasks(prevTasks => [newTask, ...prevTasks]); 

    setTitle("")
    setDescription("")
  }

  const onDeleteTaskHandler = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
  }

  return (
    <>
      <header></header>

      <main>
        {/* Dynamic data changes */}
        <section className='form'>
          <input type="text" name='title' value={title} onChange={(e) => onTitleChangeHandler(e.target.value)}/>
          <input type="text" name='description' value={description} onChange={(e) =>onDescriptionChangeHandler(e.target.value)}/>

          <div className="btn-wrapper">
            <button onClick={onAddTaskHandler}>Add new task</button>
          </div>
        </section>


        <section className='tasks'>
          <Tasks tasks={tasks} onDeleteTaskHandler={onDeleteTaskHandler} hasEditMode={hasEditMode} setEditMode={setEditMode} onEditHandler={onEditHandler}/>
        </section>

        {/* {tasks.map(el => {
          return(
            <article>
              <div>
                <h2>{el.title}</h2>
                <p>{el.description}</p>
              </div>

              <section>
                <button>Delete</button>
              </section>
            </article>
          )
        })} */}
      </main>

      <footer>All rights reserved(c) 2025</footer>
    </>
  )
}
