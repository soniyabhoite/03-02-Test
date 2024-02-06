import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const router=useNavigate();
    const [userData, setUserData] = useState({ name: "", email: "", password: "",confirmPassword:"" })
    console.log(userData, "userData")
    async function handleSubmit(e) {
        e.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword)
        
        {
            if(userData.password === userData.confirmPassword)
            {
                try{
                    const response = await axios.post('http://localhost:5000/api/auth/register', { userData })
                    console.log(response)
                   // const response={data:{success:true,message:"Registration completed."}}
                    if(response.data.success===true)
                    {
                        alert(response.data.message)
                        
                     setUserData({ name: "", email: "", password: "",confirmPassword:"" })
                      router('/login-form')
                    }
                }
                catch(error){
                    console.log(error)
                    alert(error.response.data.message)
                }
          
            }
            else{
                alert("password and confirm password not match")
            }
        }
        else{
            alert("all fields are required")
        }
    }

    function handleChange(e) {
        // console.log(e.target.value, e.target.name)
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input type='text' required onChange={handleChange} name="name" value={userData.name} /><br />
                <label>Email :</label><br />
                <input type='email' required onChange={handleChange} name='email' value={userData.email} /><br />
                <label>Password</label><br />
                <input type='password' required onChange={handleChange} name='password' value={userData.password} /><br />
                <label>Confirm Password</label><br />
                <input type='password' required onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br />
                <input type='submit' value="Register" />
            </form>
        </div>
    )
}


export default RegisterForm
