import { ToDoItem } from "./ToDoItem.jsx"

export function ToDoList({ todos, toggleTodo, deleteTodo }) { //Remember to pass the props both into the functions and custom components as needed.
    return (
        <ul className="list">
        {todos.length === 0 && "List is empty!"}
        {todos.map(todo => { {/*Will render the array just like they are regular elements, one after the other */}
            return ( 
                <ToDoItem 
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            )
        })}
    
      </ul>
    )
}