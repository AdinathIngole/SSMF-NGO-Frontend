// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const PolicySection = ({ title, content }) => {
//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     <h2>{title}</h2>
//                     <p>{content}</p>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default PolicySection;

import React from 'react';

const PolicySection = ({ title, content }) => {
    return (
        <div>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PolicySection;
