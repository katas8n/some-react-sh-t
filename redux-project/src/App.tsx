import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTodo } from './todoSlice';

export function App() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state?.todo?.todos);
  const dispatch = useDispatch();

  const onChangeTitleHadnler = (value) => {
    setTitle(value);
  }

  const onClickAddTodoHandler = () => {
    dispatch(addTodo(title))
    setTitle(""); 
  }
  
  
  return (
    <section>

      <div>
        <input type="text" value={title} onChange={e => onChangeTitleHadnler(e.target.value)} />
        <button onClick={onClickAddTodoHandler}>Add new task</button>
      </div>

      <div>
        {
          todos.map(todo => (
            <li key={todo.title}>
              {todo.title}
            </li>
          ))
        }
      </div>
    </section>
  )
}


