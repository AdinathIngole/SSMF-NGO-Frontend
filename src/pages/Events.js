import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/events.css'; // Create and import your custom CSS for styling
import event1 from '../assets/Images/tree-plantation_img_eve2.png';
import event2 from '../assets/Images/fund_raising_eve4.jpg';
import event3 from '../assets/Images/charitable_trust_eve7.png';
import event4 from '../assets/Images/img_world_ngo_ev1.webp';
import event5 from '../assets/Images/eve3_world_environment.avif';
import event6 from '../assets/Images/blood_donation_eve5.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const eventsData = [
    {
        title: "Tree Plantation",
        date: "July 20, 2024",
        description: "We at Sant Sevalal Maharaj Foundation have an aim of planting 1000 trees in an year and you as an individual can come,join us. One Tree One Life ",
        imageUrl: event1
    },
    {
        title: "Fund Raising",
        date: "August 10, 2024",
        description: "To provide the children and the needy the best we can we need funds to manage and we know that you as an individual can contribute towards it.",
        imageUrl: event2
    },
    {
        title: "Charitable Trust Event",
        date: "September 15, 2024",
        description: "Join us for a transformative charitable event dedicated to uplifting our community. Together, let's make a lasting difference and create a brighter future",
        imageUrl: event3
    }
];

const moreEventsData = [
    {
        title: "World NGO Day",    
        date: "February 27, 2024",
        description: "Celebrate World NGO Day with us as we honor the incredible work of non-governmental organizations globally. Join us in recognizing their contributions to society, sharing success stories, and fostering collaboration for a better world. Together, we can amplify the impact of NGOs and drive positive change.",
        imageUrl: event4
    },
    {
        title: "World Environment Day",
        date: "June 5, 2024",
        description: "Join us in celebrating World Environment Day as we come together to protect and preserve our planet. Participate in impactful activities, learn about sustainable practices, and be part of the global movement for environmental conservation. Together, let's create a greener, healthier future for all.",
        imageUrl: event5
    },
    {
        title: "Blood Donation",
        date: "July 02, 2024",
        description: "Give the gift of life at our upcoming blood donation drive. Join us to support patients in need and make a meaningful impact on their lives. Your generous donation can save lives and bring hope to countless families.Every drop counts and your contribution is invaluable. Together, we can create a healthier and stronger community. Be a hero and help us ensure that no one has to wait for the blood they desperately need.",
        imageUrl: event6
    }
];

export default function Events() {
    return (
        <>
        <Navbar/>
        <div className="events-container">
            <h1 className="text-center my-5" id='ctext'>Upcoming Events</h1>
            <div className="row">
                {eventsData.map((event, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card event-card">
                            <img src={event.imageUrl} className="card-img-top" alt={event.title} />
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.date}</p>
                                <p className="card-text">{event.description}</p>
                                <a href="DonateUs" className="btn btn-primary">Donate Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-center my-5">Past Events</h2>
            <div className="more-events">
                {moreEventsData.map((event, index) => (
                    <div className="more-event-card" key={index}>
                        <img src={event.imageUrl} alt={event.title} className="more-event-img" />
                        <div className="more-event-content">
                            <h3 className="more-event-title">{event.title}</h3>
                            <p className="more-event-date">{event.date}</p>
                            <p className="more-event-description">{event.description}</p>
                            <a href="DonateUs" className="btn btn-secondary">Donate Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
}
