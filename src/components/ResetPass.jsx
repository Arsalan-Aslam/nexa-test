import React from 'react'
import { Link } from 'react-router-dom';

const ResetPass = () => {
  return (
    <div className="container">
        <div className="sub-container">
                <h1>Reset Password</h1>
            <form className='form'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder='Enter email address'/>
                </div>
                
                <button>Reset Password</button>
                <p style={{textAlign:"center"}}><Link to="/signin">Sign in instead</Link></p>
            </form>
            </div>
    </div>
  )
}

export default ResetPass;