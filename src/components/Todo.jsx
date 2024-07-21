import React from 'react';
import { TbTrash } from "react-icons/tb";

const style = {
    li: `flex justify-between bg-peach/50 p-4 my-4 ml-2 mr-2 rounded-lg max-w-sm`,
    liComplete: `flex justify-between bg-peach/75 p-4 my-4 ml-2 mr-2 rounded-lg max-w-sm m-auto`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}

// Props: todo, toggleComplete
const Todo  = (props) => {
    return(
        <li className={props.todo.completed ? style.liComplete : style.li}>
            <div className={style.row}>
                <input type='checkbox' onChange={()=> props.toggleComplete(props.todo)} className='m-auto' checked={props.todo.completed ? 'checked' : ''}/>
                <p onClick={()=> props.toggleComplete(props.todo)} className={props.todo.completed ? style.textComplete : style.text}>{props.todo.task}</p>
            </div>

            <button><TbTrash /></button>
        </li>
    )
}

export default Todo;