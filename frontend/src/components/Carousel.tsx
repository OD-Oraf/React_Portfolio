import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card, { CardItem } from './Card';

import ENOVE from '../assets/images/ENOVE_card.png';
import ORB from '../assets/images/Resume_Builder_card.png';

function Carousel() {
    const [items, setItems] = useState<CardItem[]>([
        {
            id: 0,
            title: "ORB-(Od's Resume Builder)",
            subTitle: 'Resume Builder application designed to make creating resumes easier with the choice of various templates',
            imgSrc: ORB,
            link: 'http://resume-portal.us-west-2.elasticbeanstalk.com/',
            selected: false,
        },
        {
            id: 1,
            title: 'Enove',
            subTitle: 'Ecommerce demo with user registration and cart functionality. Also has a basic admin dashboard.',
            imgSrc: ENOVE,
            link: 'https://enove.herokuapp.com/#/',
            selected: false,
        },
    ]);

    const handleCardClick = (id: number) => {
        setItems(prevItems =>
            prevItems.map(item => ({
                ...item,
                selected: item.id === id ? !item.selected : false,
            }))
        );
    };

    return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {items.map(item => (
                    <Card
                        item={item}
                        click={() => handleCardClick(item.id)}
                        key={item.id}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default Carousel;
