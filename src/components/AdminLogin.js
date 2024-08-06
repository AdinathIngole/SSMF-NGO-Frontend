import React, { useState } from 'react';
import '../css/AdminLogin.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from '../axiosURLConfig';

const AdminLogin = () => {

  const navigate = useNavigate();
  const [formData , setFormData] = useState({
    username:'',
    password:''
  });

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response = await axios.post('/admin/adminLogin', formData);
        console.log(response.data);
        if(response.status === 200 ){
          alert('login success');
          navigate('/');
        }
    } catch (error) {
      console.log('error in admin login',error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <label><b>Email</b></label>
            <input type="email" name='username' placeholder="Email" onChange={handleChange}  required/>
            <label><b>Password</b></label>
            <input type="password" name='password' placeholder="Password" onChange={handleChange} required/>
           
            <button type="submit" className="btn-secondary">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminLogin;
