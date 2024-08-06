import React from 'react';
import '../css/landing.css';
import main from '../assets/about.jpg';
import missionImage1 from '../assets/mission.jpg'; // Replace with actual image paths
import missionImage2 from '../assets/download.png'; // Replace with actual image paths
import missionImage3 from '../assets/obj.webp'; // Replace with actual image paths
import missionImage4 from '../assets/goal.jpg';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();
    return(
        <div className="landing">
            <span className="left">
                <div className="caption1">
                    <hr />
                    <h4>WE ARE SANT SEVALAL MAHARAJ FOUNDATION </h4>
                </div>
                <div className="titles">
                    <div className="caption2">
                        <p>At SANT SEVALAL MAHARAJ FOUNDATION </p>
                    </div>
                    <div className="caption3">
                        <p>
                            Ensuring regular and nutritious food supply to underprivileged communities, homeless individuals, or areas affected by food shortages or disasters.
                            Work with communities to build awareness about the importance of education and empower parents to actively support their children's education.
                            Offer scholarships, grants, or financial aid to children from poor families to enable them to stay in school and pursue higher education. 
                            Ensure that all children, especially those from disadvantaged backgrounds, have access to formal and/or informal education opportunities.
                        </p>
                    </div>
                </div>
            </span>
            <span className="right">
                <img src={main} alt="Smiling Faces" id="smile_img" />
            </span>
            <div className="mission-section">
                <div className="mission-left">
                    <img src={missionImage1} alt="Mission 1" className="circle-image" />
                    <div className="mission-description">
                        <h4>Our Mission</h4>
                        <p>To provide quality education and holistic development opportunities to underserved
children, empowering them to break the cycle of poverty. Through collaborative partnerships and
innovative programs, we strive to enhance learning outcomes, nurture critical thinking skills, and
cultivate a supportive environment where every child can thrive academically and socially</p>
                    </div>
                </div>

                <div className="mission-right">
                    <img src={missionImage2} alt="Mission 2" className="circle-image" />
                    <div className="mission-description">
                        <h4>Our Vision</h4>
                        <p>Our vision is to create a world where every child, regardless of socio-economic background, has
access to quality education. We aim to empower disadvantaged communities through innovative
educational initiatives that inspire lifelong learning, foster creativity, and unlock the full potential
of every child.</p>
                    </div>
                </div>
            </div>
            <div className="additional-section">
                <div className="additional-left">
                    <img src={missionImage3} alt="Additional Mission 1" className="circle-image" />
                    <div className="mission-description">
                        <h4>Our New Initiative</h4>
                        <p>Ensuring regular and nutritious food supply to underprivileged communities, homeless
individuals, or areas affected by food shortages or disasters.Work with communities to build awareness about the importance of education and
empower parents to actively support their children's education. Offer scholarships, grants, or financial aid to children from poor families to enable them
to stay in school and pursue higher education. Ensure that all children, especially those from disadvantaged backgrounds, have access to
formal and/or informal education opportunities.</p>
                    </div>
                </div>

                <div className="additional-right">
                    <img src={missionImage4} alt="Additional Mission 2" className="circle-image" />
                    <div className="mission-description">
                        <h4>Our Future Goals</h4>
                        <p>Our goal is to ensure that 95% of the children in our target communities have access to quality
primary education by 2030, measured through improved literacy rates and school attendance. We
aim to provide educational resources, teacher training, and community engagement initiatives
that foster a supportive learning environment conducive to academic achievement and personal
growth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}