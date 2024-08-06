import React from 'react';
import Navbar from "../components/Navbar";
import space from '../assets/Space.mp4';
import '../css/home.css';
import Landing from "../components/Landing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <video src={space} type="video/mp4" autoPlay loop muted>
          Sorry, your browser doesn't support videos.
        </video>
        <div className="typewriter">
          <h2>SANT SEVALAL MAHARAJ FOUNDATION.....</h2>
        </div>
      </div>
      <Landing />
      <Footer />
    </>
  );
}
