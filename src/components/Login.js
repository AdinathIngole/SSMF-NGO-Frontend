import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';
import Navbar from './Navbar';
import axios from 'axios';

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) =>{
    event.preventDefault();

    try{
      const response = await axios.post('http://16.171.151.230:5000/api/user/login', {email, password});
      if(response.status === 200){
        alert('Login Successfully!...')
        console.log('login Successfully');
        navigate('/userDashboard'); //Redirect to User dashboard or User home page
      }
    } catch(error){
      if(error.response && error.response.status === 401){
        alert('Invalis Email or password !');
        console.log('Invalid Email or Password !');
      } else{
        alert('Login Error!');
      console.log('Login Error..', error);
      }
      
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label><b>Email</b></label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label><b>Password</b></label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="btn-secondary m-3">Login</button>
            <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
          </form>
          <p>Don't have an account? <Link className='signupbtn' to="/signup">Sign Up</Link></p>

        </div>
      </div>
    </>
  );
}

export default Login;
