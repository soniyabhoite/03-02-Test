import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DisplayTodo = () => {
    const[ todos ,setTodo]=useState([])
    const router=useNavigate();

    async function getData() {
        try {
            const response = await axios.get('http://localhost:5000/api/todo/display-todo')
            console.log(response.data.todos, "response.data")
            all(response.data.todos)
          // products=response.data
           // console.log(products)
        } catch (error) {
            console.log(error)
        }
    }
//    function Routing(id){
//     router(`/single-product/${id}`); //template parsing ${}
//    }
    function all(p)
    {
        setTodo(p)
    }

    useEffect(() => {
        // toast.success("Component rendered on browser...")
        getData();
    }, [])
    return (
      
        <div>
            <h2>All Todos</h2>
            {todos?.length? <div>
                 {todos.map((todo)=>(
                    <div  style={{width:'50%',marginBottom:'30px',margin:'auto',cursor:'pointer'}}>
                       <h3>{todo.name} <button style={{marginLeft:'50px'}}>Delete</button></h3>
                 
                   </div>
        

                ))} 
                </div>:
                <div>Loading...</div>
                 }
                
            
        </div>
        
    )
}

export default DisplayTodo