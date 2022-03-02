
import React, {useState} from 'react';
import '../components/Style.css';
import {Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
const navigate = useNavigate();
  return (
    <div className="container">
        <div className="sub-container">
                <h1>Welcome</h1>
                
                <button id="logout-btn" onClick={()=>navigate("/signin")}>Sign out</button>
            
            </div>
    </div>
  )
}

export default Dashboard