import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
export default function Card({ userData, handleDelete, handleEdit }) {
  // const navigate=useNavigate()
  const image={
    late:[{
      image:"https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
    }]
  }
  return (
    <>
      <div className="main">
        {userData.map((post, index) => {
          return (
            <div className="card " style={{ width: "18rem" }} key={index}>
              <div className="card-body ">
              
               <h5 style={{fontWeight:"700", color:"green"}}>{post.id}</h5>
              
               
                
                <h5 className="name">{post.name}</h5>
            
               <img src={image.late.image} className="image" alt="..." style={{height:"50vh",width:"50%"}}/>
            
              
                <p className="email">{post.email}</p>
         
                <p className="age">{post.post}</p>
                
             
              </div>
              <i
                className="bi bi-trash3 trash"
                onClick={() => {
                  if (window.confirm("Are yor Sure!!")) handleDelete(post.id);
                }}
              ></i>

              <Link to="/edit">
                <i
                  className="bi bi-pencil-square trash"
                  onClick={() =>
                    handleEdit(post.id, post.name, post.email, post.post)
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
