import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Company Name & Address</h4>
          <ul className="links">
            <li><a href="#">Kaushalyatech Solutions Pvt Ltd</a></li>
            <li><a href="#">OFFICE NO 104, <br />ARENA LOTUS ABOVE SBI BANK, <br />VADAGAO SHERI,<br/>PUNE - 411014</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><a href="#">Logo Designing</a></li>
            <li><a href="#">Website Development</a></li>
            <li><a href="#">Digital Marketing</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li><a href="/RefundCancellationPolicy#refund-policy">Refund Policy</a></li>
            <li><a href="/RefundCancellationPolicy#cancellation-policy">Cancellation Policy</a></li>
            <li><a href="/RefundCancellationPolicy#privacy-policy">Privacy Policy</a></li>
            <li><a href="/RefundCancellationPolicy#terms-of-service">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Location</h4>
          <p>Our Premises are Located in Wadgaon Sheri Pune.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15130.131080078041!2d73.92039299999999!3d18.5500045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16f0414015b%3A0x39a3cd31679bff9d!2sWadgaon%20Sheri%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1717501172378!5m2!1sen!2sin"
            title="location"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="icons">
            <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <p><center><i className="fa fa-copyright" aria-hidden="true"></i> 2024 All rights reserved by Kaushalyatech Solutions</center></p>
    </section>
  );
};

export default Footer;