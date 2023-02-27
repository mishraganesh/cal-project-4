import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Edit = () => {
const navigate=useNavigate();

 const[id,setId]=useState(0);
 const[name,setName]=useState("")
 const[email,setEmail]=useState("")
 const[age,setAge]=useState("")

 useEffect(()=>{
    setId(localStorage.getItem("id"))
    setName(localStorage.getItem("name"))
    setEmail(localStorage.getItem("email"))
    setAge(localStorage.getItem("age"))
 },[])
 const handleSubmit=(e)=>{
    e.preventDefault()
    axios.put(`https://63fa154d473885d837d82215.mockapi.io/crud/${id}`,{
        name:name,
        email:email,
        age:age
    }).then(()=>{
      alert("update Successfully")
        navigate("/")
    })

 }
   
  return (
    <div className='mx-3'>
      <form onSubmit={handleSubmit}>
        <h1>Edit Form</h1>
      
    <label for="exampleInputEmail1" className="form-label " >UserName</label>
    <input type="text"className="form-control "  
    value={name} onChange={(e)=>setName(e.target.value)} />
   
      
    <label for="exampleInputEmail1" className="form-label " >Email address</label>
    <input type="email"className="form-control " 
     value={email} onChange={(e)=>setEmail(e.target.value) }/>
    
 
   
    <label for="exampleInputEmail1" className="form-label " >Age</label>
    <input type="number"className="form-control" 
     value={age} onChange={(e)=>setAge(e.target.value) } />
  
       <button className='btn btn-primary mt-4 ' >Update</button>
      
      </form>
    
    </div>
  )
}

export default Edit
