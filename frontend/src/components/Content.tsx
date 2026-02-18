import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface ContentProps {
    children: React.ReactNode;
}

function Content({ children }: ContentProps) {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
}

export default Content;
