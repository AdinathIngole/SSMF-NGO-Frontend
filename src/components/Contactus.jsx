import React, { useState } from 'react';
import '../css/Contactus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from '../axiosURLConfig';

const Contact = () => {
    const initialFormData = {
        name: '',
        email: '',
        mobile: '',
        services: [],
        message: ''
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (checked) {
                setFormData({
                    ...formData,
                    services: [...formData.services, value]
                });
            } else {
                setFormData({
                    ...formData,
                    services: formData.services.filter(service => service !== value)
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const response = await axios.post('/contact/save-Contact', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status === 200) {
                alert('Contact details saved successfully!');
                setFormData(initialFormData); // Clear form fields on successful submit
            } else {
                alert('Failed to save contact details.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving contact details.');
        }
    };

    return (
        <>
        <Navbar/>
        <div className="contact">
            <div className="container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter the Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter the Email Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input type="text" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} pattern="\d*" maxLength="10" placeholder="Enter the Mobile Number" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">How can you Contribute</label>
                        <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                 
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
                <div className='contact-section'>
                    <p>For Further Enquiries or any Information you can connect with us through Email or Contact Number provided below:
                        <br/><b>support@santsewalalfoundation.org</b> <br/><b>8484832971</b>
                    </p>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;
