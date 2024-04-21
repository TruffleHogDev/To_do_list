import { useState } from "react"

export function NewForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("") //Common syntax for naming values in an array - your value, then whatever function is updating that value.

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return //This prevents adding empty strings to the list. Effectively saying "Return nothing".

       onSubmit(newItem) //essentially the addTodo function in this context.
    
        setNewItem("") //So that we update the form to have an empty text field on submission
    }

 return (
         <form onSubmit={handleSubmit} className="new-item-form">
           <label htmlFor="item">Fun little to-do list</label>
           <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)} // Getting the value of the input, setting it as the new value, and updating it on the list.
            type="text" 
            id="item"
            /> 
            <button className="btn">Add</button>
        </form>
        )
}