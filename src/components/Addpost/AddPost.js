import axios from "axios";
import { useState } from "react";
import "./Addpost.css";
import { useNavigate } from "react-router-dom";
import {
  userNameValidations,
  emailValidation,
  userPostValidations,
} from "../../FormValidation";
function AddPost() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [postError, setPostError] = useState("");

  const navigate = useNavigate();
  const handleUser = (e) => {
    setUserName(e.target.value);
    const validate = userNameValidations(userName);
    setUserNameError(validate);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    const validate = emailValidation(email);
    setUserEmailError(validate);
  };
  const handlePost = (e) => {
    setPost(e.target.value);
    const validate = userPostValidations(post);
    setPostError(validate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userNameError && userEmailError || postError === "true") {
      axios
        .post("https://63fa154d473885d837d82215.mockapi.io/crud", {
          name: userName,
          email: email,
          post: post,
        })
        .then(() => {
          navigate("/");
        });
    } else {
      alert("You put Wrong Credentials");
    }
  };

  return (
    <div className="mx-3">
      <form onSubmit={handleSubmit}>
        <h1>Add Posts</h1>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            CharacterName
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
          <label htmlFor="exampleInputEmail1" className="form-label">
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
        <div className="form-floating">
          <textarea className="form-control" onChange={handlePost} />
          <label for="floatingTextarea2">posts here...</label>
          <span>{userEmailError}</span>
        </div>

        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPost;
