import React, {useState} from 'react';
import '../components/Style.css';
import {Link, useNavigate } from "react-router-dom";
import { auth }  from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signinHandler = (e) => {
    e.preventDefault();
    console.log(email, password)
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  return (
    <div className="container">
        <div className="sub-container">
                <h1>Sign In</h1>
            <form className='form'onSubmit={signinHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Enter email address' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button>Sign In</button>
                <p style={{textAlign:"center"}}><Link to="/">Sign up instead</Link> | <Link to="/reset">Forgot passowrd?</Link></p>
            </form>
            </div>
    </div>
  )
}

export default Signin;