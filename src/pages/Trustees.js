import React from 'react';
import '../css/Trustees.css';

import vivekPic from '../assets/vivek.png';
import shakuntalaPic from '../assets/shakuntala.png';
import anitaPic from '../assets/Sunita-removebg-preview (1).png';
import sachinPic from '../assets/sachin.png';
import bhaskarPic from '../assets/bhaskar.png';
import vyankteshPic from '../assets/Vyanktesh-removebg-preview.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const trusteesData = [
    { name: 'VIVEK BHILA NAIK', position: 'CHAIRMAN', location: 'PUNE', email: 'vivek@gmail.com', profilePic: vivekPic },
    { name: 'SHAKUNTALA NAIK', position: 'VICE CHAIRMAN', location: 'PUNE', email: 'shakuntala@gmail.com', profilePic: shakuntalaPic },
    { name: 'ANITA RATHOD', position: 'TREASURER', location: 'SHAMBHAJINAGAR', email: 'anita@gmail.com',  profilePic: anitaPic },
    { name: 'PRAKASH JADHAV', position: 'SECRETARY', location: 'MUMBAI', email: 'prakash@gmail.com' },
    { name: 'SACHIN CHAVHAN', position: 'ORDINARY MEMBERS', location: 'JALGAON', email: 'sachin@gmail.com',  profilePic: sachinPic },
    { name: 'ANIL CHAVHAN', position: 'CO-OPTED MEMBER', location: 'JALGAON', email: 'anil@gmail.com' },
    { name: 'SAHEBRAO PAWAR', position: 'MEMBER', location: 'SHAMBHAJINAGAR', email: 'sahebrao@gmail.com' },
    { name: 'BHASKAR MISHRA', position: 'Advisor', location: 'Pune', email: 'bhashkar@gmail.com',profilePic: bhaskarPic },
    { name: 'VYANKTESH SHAHANE', position: 'Co-advisor', location: 'Pune', email: 'vyanktesh@gmail.com',  profilePic: vyankteshPic }
];

export default function Trustees() {
    return (
        <>
            <Navbar />
            <div className="trustees-container">
                <h2 className="caption">Committee Members</h2>
                {trusteesData.map((trustee, index) => (
                    <div key={index} className="trustee-section">
                        <img src={trustee.profilePic} alt="Profile" className="trustee-pic" />
                        <div className="trustee-details">
                            <h2>{trustee.name}</h2>
                            <h4>{trustee.position}</h4>
                            <p>{trustee.location}</p>
                            <p>Email: {trustee.email}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
