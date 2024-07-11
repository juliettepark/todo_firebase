import React, {useState} from 'react'
import { CgAddR } from "react-icons/cg"; // for add button

import Todo from "./components/Todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-t from-cream to-peach`,
  container: `bg-light-beige max-w-3xl width-full m-auto mt-9 rounded-lg shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-darkred p-2`,
  form: `flex justify-between`,
  input: `border-2 border-darkred p-4 ml-2 w-full text-xl text-darkred placeholder-current rounded-md bg-inherit`,
  button: `p-4 ml-2 text-darkred`,
  count: `text-center p-2`
}

function App() {
  const [todos, setTodos] = useState(['pet cherry', 'feed cherry', 'leetcode']);


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>
          Tasks
        </h1>

        {/* Input new To-Do */}
        <form className={style.form}>
          <input className={style.input} type='text' placeholder='enter task'></input>
          <button className={style.button}><CgAddR size={30}/></button>
        </form>

        {/* View Previous To-Do */}
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo}/>
          ))}
        </ul>

        <p className={style.count}>
          You have {todos.length} todos
        </p>
      </div>
      
    </div>
  );
}

export default App;
