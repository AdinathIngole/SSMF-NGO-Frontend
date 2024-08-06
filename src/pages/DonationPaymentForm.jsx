import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axiosURLConfig';
import '../css/DonationPaymentForm.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DonationPaymentForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const orderResponse = await axios.post('/donations/createOrder', formData);
      const { email, rzpOrderId, amount } = orderResponse.data;
  
      console.log('Order Response:', orderResponse.data);
      
      const options = {
        key: 'rzp_test_oN4JcNZAAsWYTN', // Use your Razorpay test API key
        amount: (amount * 100).toString(), // Amount in paise
        currency: 'INR',
        name: 'Sant Sevalal Maharaj Foundation',
        description: 'Donation',
        order_id: rzpOrderId,
        receipt: email,
        handler: async function (response) {
          console.log('Razorpay Response:', response);
          try {
            const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;
            await axios.post('/donations/verifyPayment', {
              rzpPaymentId: razorpay_payment_id,
              rzpOrderId: razorpay_order_id,
              rzpSignature: razorpay_signature
            });
            alert('Payment successful');
            navigate('/donateUs'); // Redirect to a success page or show a success message
          } catch (error) {
            console.error('Error verifying payment:', error);
            alert('Payment verification failed. Please try again.');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.contact
        },
        theme: {
          color: '#3399cc'
        }
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
  
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="donation-form-container">
        <div className='donation-form'>
        <h2>Donation Payment Form</h2>
        <form onSubmit={handleSubmit}>
            <label><b>Name</b></label>
            <input type="name" id="name" name="name" value={formData.name} onChange={handleChange}  />
            <label><b>Email</b></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}  />
            <label><b>Contact</b></label>
            <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange}></input>
            <label><b>Purpose</b></label>
            <input type="text" id="message" name="message" value={formData.message} onChange={handleChange}  />
            <label><b>Amount</b></label>
            <input type="Number" id="amount" name="amount" value={formData.amount} onChange={handleChange}  />
          <button type="submit" className="btn btn-primary">Process Donation</button>
        </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DonationPaymentForm;

