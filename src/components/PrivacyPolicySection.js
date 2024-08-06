// src/components/PrivacyPolicySection.js
import React from 'react';
import '../css/PolicyStyles.css';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicySection = ({ title, content }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </Col>
            </Row>
        </Container>
    );
};
export default PrivacyPolicySection;
