import React from 'react'
import { Link } from "react-router-dom";

function Taskbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h2>Node JS Practice</h2>
      </div>
      <div className="links">
        <Link to="/">Create Account?</Link>
        <Link to="/users" id='users'>Users</Link>
      </div>
    </div>
  );
}

export default Taskbar