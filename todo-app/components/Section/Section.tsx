// import React, { useState } from "react";

// export const Section = () => {
//     const [title, setTitle] = useState(""); 
//     const [description, setDescription] = useState(""); 


//     const onTitleChange = (value) => {
//         console.log(value);
        
//         setTitle(value)
//     }

//     const onDescriptionChange = (value) => {
//         console.log(value);
        
//         setDescription(value)
//     }
    
//     const onAddTaskHandler = () => {
//         console.log(title);
//         console.log(description);
        
//       }

//     return (
//         <section className='form'>
//             <input type="text" name='title' value={title} onChange={(e) => onTitleChange(e.target.value)}/>
//             <input type="text" name='description' value={description} onChange={(e) =>onDescriptionChange(e.target.value)}/>

//             <div className="btn-wrapper">
//                 <button onClick={onAddTaskHandler}>Add new task</button>
//             </div>
//         </section>
//     )
// }
