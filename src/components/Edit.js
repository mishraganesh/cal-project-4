import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(0);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUserName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPosts(localStorage.getItem("post"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://63fa154d473885d837d82215.mockapi.io/crud/${id}`, {
        name: userName,
        email: email,
        post: posts,
      })
      .then(() => {
        alert("update Successfully");
        navigate("/");
      });
  };

  return (
    <div className="mx-3">
      <form onSubmit={handleSubmit}>
        <h1>Edit Form</h1>

        <label htmlFor="exampleInputEmail1" className="form-label ">
          UserName
        </label>
        <input
          type="text"
          className="form-control "
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <label htmlFor="exampleInputEmail1" className="form-label ">
          Email address
        </label>
        <input
          type="email"
          className="form-control "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label HtmlFor="floatingTextarea2">posts here...</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            value={posts}
            onChange={(e) => setPosts(e.target.value)}
          />
        </div>

        <button className="btn btn-primary mt-4 ">Update</button>
      </form>
    </div>
  );
};

export default Edit;
