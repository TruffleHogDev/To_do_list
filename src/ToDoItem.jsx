import { motion, AnimatePresence } from "framer-motion"
export function ToDoItem({ completed, id, title, toggleTodo, deleteTodo, isVisible }) {
    return (
        <li>
          <label>
            <input 
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
          <button
            onClick={() => deleteTodo(id)} //Remember to pass the function, or else you're only attempting to call the result.
            className="btn btn-danger"
          >
            Delete
          </button>
            </li>
    )
}