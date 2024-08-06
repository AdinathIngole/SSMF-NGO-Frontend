import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import '../css/ImageCard.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCard = ({ image, title, text }) => {
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(!showText);
    };

    return (
        <Card className="image-card" onClick={handleClick}>
            <Card.Img variant="top" src={image} />
            {showText && (
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            )}
        </Card>
    );
};

export default ImageCard;
