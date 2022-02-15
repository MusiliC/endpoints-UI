import { useEffect, useState } from "react"
import React from 'react'
import Axios from "axios"


function Data() {

    const [users, setUsers] = useState([]);
    const [newProject, setNewProject] = useState("");

     useEffect(() => {
       Axios.get("http://localhost:3001/api/get").then((response) => {
           setUsers(response.data)
         console.log(response.data);
       });
     }, []);

     const deleteUser = (id) => {
         Axios.delete(`http://localhost:3001/api/delete/${id}`);
     }

     const updateProject = (id) =>{
        Axios.put("http://localhost:3001/api/update", {
            newProject: newProject,
            id: id            
        }).then((response) =>{
            alert('updated')
        })
     }

  return (

    <div className="data" >
       {users.map((val) =>{
        return (
          <div className="card">
            <p>
              Name :- {val.first_name} {val.second_name}
            </p>
            <p>Email :- {val.email}</p>
            <p>Project :- {val.project}</p>
            <div className="buttons">
              <button id="delete" onClick={() => deleteUser(val.id_data)}>
                Delete User
              </button>
              <input
                type="text"
                value={newProject}
                onChange={(e) => {
                  setNewProject(e.target.value);
                }}
              />
              <button id="update" onClick={() => {updateProject(val.id_data)}}>Update Project</button>
            </div>
          </div>
        );
       })}
    </div>
  )
}

export default Data