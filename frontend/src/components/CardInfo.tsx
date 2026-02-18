import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface CardInfoProps {
    title: string;
    subTitle: string;
    link: string;
}

function CardInfo({ title, subTitle, link }: CardInfoProps) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className="o-card-info" style={style}>
            <p className="o-card-title">{title}</p>
            <p className="o-card-sub-title">{subTitle}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    );
}

export default CardInfo;
