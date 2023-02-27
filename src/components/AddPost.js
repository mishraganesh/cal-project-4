import axios from "axios";
import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import {userNameValidations,emailValidation,userAgeValidation} from '../FormValidation'
function AddPost() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const[userNameError,setUserNameError]=useState("")
  const[userEmailError,setUserEmailError]=useState("")
  const[userAgeError,setUserAgeError]=useState("")

  const navigate = useNavigate();
  const handleUser=(e)=>{
    setUserName(e.target.value);
    const validate=userNameValidations(userName)
    setUserNameError(validate)

  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
    const validate=emailValidation(email)
    setUserEmailError(validate)

  }
  const handleAge=(e)=>{
    setAge(e.target.value);
    const validate=userAgeValidation(age)
   setUserAgeError(validate)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userNameError &&userEmailError &&userAgeError ==="true"){
      axios.post("https://63fa154d473885d837d82215.mockapi.io/crud", 
      {
         name: userName,
         email: email,
         age: age,
       })
       .then(() => {
         navigate("/");
       });
    }
    else{
      alert("You put Wrong Credentials")
    }
    
   
    
  };

  return (
    <div className="mx-3">
      <form onSubmit={handleSubmit}>
        <h1>Add Posts</h1>
        
          <i
            class="bi bi-skip-backward-circle-fill addBlog addBtn"
            onClick={() => navigate("/")}
          ></i>
        

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            userName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            value={userName}
            aria-describedby="emailHelp"
            onChange={handleUser}
          />
          <span>{userNameError}</span>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmail}
          />
            <span>{userEmailError}</span>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            value={age}
            onChange={handleAge}
          />
            <span>{userAgeError}</span>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPost;
