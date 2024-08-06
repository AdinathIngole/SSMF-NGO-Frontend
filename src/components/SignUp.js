import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axiosURLConfig';
import '../css/SignUp.css';
import Image1 from '../assets/Images/SignUp.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/user/signup', formData);
      if (response.status === 201) {
        alert('User registered successfully');
        console.log('User registered successfully');
        navigate('/login');
      }
    } catch (error) {
      alert('Email is already in use !');
      console.error('Email is already in use !', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-image">
          <img src={Image1} alt="Description" />
          <p className="image-description">
            <b>
              <center>Feel free to use or modify this description to suit your needs.</center>
            </b>
          </p>
        </div>
        <div className="signup-form">
          <h3><center>Sign Up</center></h3>
          <form onSubmit={handleSubmit}>
            <label><b>First Name</b></label>
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
            <label><b>Last Name</b></label>
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
            <label><b>Email</b></label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <label><b>Password</b></label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            <label><b>Confirm Password</b></label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <Link className='loginbtn' to="/login">Login</Link></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
