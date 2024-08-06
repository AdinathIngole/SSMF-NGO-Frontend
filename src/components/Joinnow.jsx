import React, { useState } from 'react';
import axios from '../axiosURLConfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Joinnow.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Joinnow = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNo: '',
        email: '',
        address: '',
        city: '',
        state: '',
        dob: '',
        qualification: '',
        bloodGroup: '',
    });

    const [adhar, setAdhar] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setAdhar(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataObj = new FormData();
        formDataObj.append('volunteer', JSON.stringify(formData)); // Convert to JSON string
        if (adhar) {
            formDataObj.append('adhar', adhar);
        }

        try {
            const response = await axios.post('/volunteers', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Success:', response.data);
            // Clear form or show success message
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className='headertwo'>Volunteer Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" className="form-control" id="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNo">Mobile No</label>
                                <input type="tel" className="form-control" id="mobileNo" placeholder="Mobile No" value={formData.mobileNo} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Address" value={formData.address} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" className="form-control" id="city" placeholder="City" value={formData.city} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="state">State</label>
                                <input type="text" className="form-control" id="state" placeholder="State" value={formData.state} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" placeholder="dd-mm-yyyy" value={formData.dob} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="qualification">Qualification</label>
                                <input type="text" className="form-control" id="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="bloodGroup">Blood Group (Optional)</label>
                                <input type="text" className="form-control" id="bloodGroup" placeholder="Blood Group" value={formData.bloodGroup} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adhar">Upload Aadhar Card - Front - Back</label>
                                <input type="file" className="form-control-file" id="adhar" onChange={handleFileChange} />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="terms" required />
                                <label className="form-check-label" htmlFor="terms">Agree to our Terms & Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Joinnow;
