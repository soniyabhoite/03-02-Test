import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AddTodo = () => {
    const [todo, setTodo] = useState({ name: "" })
    const router = useNavigate();
    function handleChange(e) {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (todo.name) {
            console.log(todo.name)
            try {
                const response = await axios.post('http://localhost:5000/api/todo/add-todo', { todo })
                console.log(response)
                if (response?.data.success) {
                    toast.success(response.data.message)
                    setTodo({ name: ""})
                    router('/display-todo')
                }
            } catch (error) {
                toast.error(error.response.data.error)
            }
        } else {
            toast.error("All fields are required.")
        }
    }
    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input type="text" value={todo.name} onChange={handleChange} name='name' /><br />
              
                <input type="submit" value="Add Todo" /><br />
            </form>
        </div>
    )
}

export default AddTodo;