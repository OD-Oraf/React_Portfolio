import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface HeroProps {
    title?: string;
    subTitle?: string;
    text?: string;
}

function Hero({ title, subTitle, text }: HeroProps) {
    return (
        <div className="bg-transparent p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {title && <h1 className="display-1 fw-bolder">{title}</h1>}
                        {subTitle && <h3 className="display-4 fw-light">{subTitle}</h3>}
                        {text && <h3 className="lead fw-light">{text}</h3>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
