import { useState, useEffect } from "react"
import { NewForm } from "./NewForm.jsx"
import { ToDoList } from "./ToDoList.jsx"
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS") //Lets us save our list items on refresh.
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  //Any type of data you want to re-render should be in state. Pass a function when you need to use the current value.

  useEffect(() => { //useEffect says "Run this function every time the objects inside the array of our second property change."
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) { //The title value is defined by what is entered into the form.
    setTodos((currentTodos) => {
      return [
      ...currentTodos,
      {id: crypto.randomUUID(), title, completed: false }, //crypto.randomUUID generates a cryptographically secure, randomly generated 36 character long v4 UUID.
     ]
  })
  }

//The below function enables toggling the checkboxes on list items when they are complete. Check the css for a refresher on styling different types of event handlers.
function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed } //Creating a new state object with one update on it.
      }

      return todo
    })
  })
}

//As the filter implies, returns anything not defined as deleted by our event handler on the delete button. More specifically, it returns everything except for what was just selected.
function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  return(
  <>
   <NewForm onSubmit={addTodo}/> {/*Adds the new component to the list, labeled by whatever title is defined as.*/}
  <h1 className="header">To-do List</h1>
  <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
</>
  )
}