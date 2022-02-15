import React from 'react'
import { useState } from "react";
import Axios from 'axios';
import { useHistory } from "react-router-dom";

function Log() {

const [firstName, setFirstName] = useState("");
const [secondName, setSecondName] = useState("");
const [email, setEmail] = useState("");
const [projectName, setProjectName] = useState("");
const [password, setPassword] = useState("");


  const history = useHistory();

const handleSubmit = (e) => {

  Axios.post("http://localhost:3001/api/insert", {
    firstName: firstName,
    secondName: secondName,
    email: email,
    project: projectName,
    password:password
    }).then(() => {
      console.log("success insert");
    })
    history.push("/users");
  
};

  return (
    <div className="form">
      <form action="">       
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="">Second Name:</label>
        <input
          type="text"
          value={secondName}
          onChange={(e) => {
            setSecondName(e.target.value);
          }}
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="">Project Name:</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </form>
      <button className="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Log