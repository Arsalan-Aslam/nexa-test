
import React from 'react'
import {useState} from "react"
import '../components/Style.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth }  from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  
  const signupHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    
    
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    });
    setName("");
    setEmail("");
    setPassword("");
    alert("Signup seccessfully! Please sign in");
    navigate("/signin");

  }

  return (
    <div className="container">
        
        <div className="sub-container">
                <h1>Sign Up</h1>
            <form className='form' onSubmit={signupHandler}>
            <div className="form-control">
                    <label htmlFor="email">Name</label>
                    <input type="text" id="Name" value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button>Sign Up</button>
                <p style={{textAlign:"center"}}><Link to="/signin">Sign in instead</Link></p>
            </form>
            </div>
    </div>
  )
}

export default Signup;
