import React, {useState, useEffect} from 'react'
import { CgAddR } from "react-icons/cg"; // for add button

import Todo from "./components/Todo";

// Named imports import that entity with matching name only
// Default import like import db from __ will import what was default exported
// It loses its name and is renamed to db.
import {db} from './firebase.js'; // const that we initialized
import { query, collection, onSnapshot } from 'firebase/firestore'; // methods from firebase


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
  const [todos, setTodos] = useState([]);

  // Will trigger first arg (function) when the App component finishes rendering
  // Will only rerun when any of the variables in the second argument trigger
  // Here, the second arg is [] so will only run once!
  // setup function should return cleanup function that can disconnect from external
  // system. (unsubscribe in this example)
  useEffect(() => {
    // collection(db_reference, path to wanted collection) 
    // query(base to query from (my collection), list of constraints)
    const q = query(collection(db, 'todo-list'));
    // console.log(collection(db, 'todo-list'));
    // console.log(q)
 
    // Attaches a listener to DocumentSnapshot events.
    // Takes "snapshot" of current and feeds us the data
    // Param 1: reference to document to listen to (watch for changes)
    // Param 2: onNext, function to call everytime new DocumentSnapshot available
    // Return: function that can be called to cancel the snapshot listener.
    const unsubscribe = onSnapshot(q, (querySnapshot) => { // pass recent event to callback?
      let todosArr = []
      // console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        // console.log(doc)
        // Spread operator to get all the data and other keys
        // then add another id field
        todosArr.push({...doc.data(), id: doc.id})
      })
      setTodos(todosArr)
    })

    return () => unsubscribe()
  }, [])


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
