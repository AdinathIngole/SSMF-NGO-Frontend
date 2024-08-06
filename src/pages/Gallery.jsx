import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Gallery.css';
import localImage1 from '../assets/Images/img1.jpg';
import localImage2 from '../assets/Images/img2.jpg';
import localImage3 from '../assets/Images/foodnew.jpeg';
import localImage4 from '../assets/Images/img4.jpg';
import localImage5 from '../assets/Images/img5new.jpg';
import localImage6 from '../assets/Images/img6new.jpg';
import localImage7 from '../assets/Images/hospital.jpg';
import localImage8 from '../assets/Images/dance.webp';
import localImage9 from '../assets/Images/sportevent2.jpg';
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer';

const images = [
  { src: localImage1, title: 'One to One Guidance' },
  { src: localImage2, title: 'Rural Education' },
  { src: localImage3, title: 'Nutritious Food' },
  { src: localImage4, title: 'Practice Session' },
  { src: localImage5, title: 'Yoga Session' },
  { src: localImage6, title: 'Provide Clothes' },
  { src: localImage7, title: 'Hospitality' },
  { src: localImage8, title: 'Dance' },
  { src: localImage9, title: 'Sport' },
];

const Gallery = () => {
  return (
    <div>
      <Navbar /> {/* Include Navbar component */}
      <div className="container mt-5 pt-5" id="containerid">
        <h2 className="text-center mb-4">Image Gallery</h2>
        <div className="row">
          {images.map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="hovereffect">
                <img src={image.src} className="img-fluid" alt={`Image ${index + 1}`} />
                <div className="overlay">
                  <h2>{image.title}</h2>
                  <a className="info" href="DonateUs">Donate Now</a>
                </div>
              </div>
            </div>
          )
          )
          
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
