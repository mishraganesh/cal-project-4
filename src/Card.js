import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
export default function Card({ userData, handleDelete, handleEdit }) {
  // const navigate=useNavigate()
  return (
    <>
      <div className="main">
        {userData.map((post, index) => {
          return (
            <div class="card " style={{ width: "18rem" }} key={index}>
              <div class="card-body ">
               <h5 style={{fontWeight:"700", color:"green"}}>{post.id}</h5>
                 
                
                <h5 className="name">{post.name}</h5>

                <p className="email">{post.email}</p>
                <p className="age">{post.age}</p>
             
              </div>
              <i
                class="bi bi-trash3 trash"
                onClick={() => {
                  if (window.confirm("Are yor Sure!!")) handleDelete(post.id);
                }}
              ></i>

              <Link to="/edit">
                <i
                  class="bi bi-pencil-square trash"
                  onClick={() =>
                    handleEdit(post.id, post.name, post.email, post.age)
                  }
                ></i>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
