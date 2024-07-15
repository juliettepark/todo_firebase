import React from 'react';
import { TbTrash } from "react-icons/tb";

const style = {
    li: `flex justify-between bg-peach/50 p-4 my-4 ml-2 mr-2 rounded-lg max-w-sm`,
    liComplete: `flex justify-between bg-peach/75 p-4 my-4 ml-2 mr-2 rounded-lg max-w-sm m-auto`,
    row: `flex`,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer linethrough`,
    button: `cursor-pointer flex items-center`
}

const Todo  = (props) => {
    return(
        <li className={style.li}>
            <div className={style.row}>
                <input type='checkbox' className='m-auto'/>
                <p className={style.text}>{props.todo.task}</p>
            </div>

            <button><TbTrash /></button>
        </li>
    )
}

export default Todo;