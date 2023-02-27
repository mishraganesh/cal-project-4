import "./App.css";
import Card from "./Card";
import { useState, useEffect } from "react";
// import {cardArr} from './constdata'
import Pagination from "./components/pagination/Pagination";


import {  useNavigate } from "react-router-dom";

import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);
  


  const navigate = useNavigate();

  const fetchData=()=>{
    axios
    .get("https://63fa154d473885d837d82215.mockapi.io/crud")
    .then((rersponse) => {
      setUsers(rersponse.data);
    });

  }

  useEffect(() => {
    fetchData();
   
  }, []);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = users.slice(indexOfFirstPost, indexOfLastPost);
  const paginate=(pageNumber)=>setCurrentPage(pageNumber)

 
  const handleDelete=(id)=>{
    axios.delete(`https://63fa154d473885d837d82215.mockapi.io/crud/${id}`)
    .then(()=>{
      fetchData();
    })

  }
  const handleEdit=(id,name,email,age)=>{
 localStorage.setItem("id",id)
 localStorage.setItem("name",name)
 localStorage.setItem("email",email)
 localStorage.setItem("age",age)
 
 


 }
//  console.log(handleEdit)



  return (
    <>
      <h1>Blogging Website</h1>
      
     <i class="bi bi-person-plus-fill addBtn" onClick={() => navigate("/addpost")}></i>
     
      <div className="wrapper">
   
        <Card userData={currentPost} handleDelete={handleDelete} handleEdit={handleEdit} />
        <Pagination postPerPage={postPerPage} totalPost={users.length} paginate={paginate}/>
        
      </div>
    </>
  );
}

export default App;
