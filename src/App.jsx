import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contactus from "./components/Contactus";
import JoinNow from "./components/Joinnow";
import Gallery from "./pages/Gallery";
import Footer from './components/Footer.js';
import Events from './pages/Events';
import Trustees from "./pages/Trustees.js";
import DonateUs from "./pages/DonateUs.js";
import SignUp from "./components/SignUp.js";
import Login from "./components/Login.js";
import AdminLogin from "./components/AdminLogin.js";
import AdminPanel from "./components/AdminPanel.js";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import VolunteerList from "./components/VolunteerList.jsx";
import DonationPaymentForm from "./pages/DonationPaymentForm.jsx";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route exact path="/joinnow" element={<JoinNow />} />
        <Route exact path="/volunteerList" element={<VolunteerList />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/trustees" element={<Trustees />} />
        <Route path="/DonateUs" element={<DonateUs/>} />
        <Route path="/donationPaymentForm" element={<DonationPaymentForm/>}/>
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/AdminLogin" element={<AdminLogin/>} />
        <Route path="/AdminPanel" element={<AdminPanel/>} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/events" element={<Events />} />
        <Route path="/RefundCancellationPolicy" element={  <RefundCancellationPolicy />} />
      
        

      </Routes>
    </BrowserRouter>
  );
}
