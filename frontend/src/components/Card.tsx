import React from 'react';
import CardInfo from './CardInfo';

export interface CardItem {
    id: number;
    title: string;
    subTitle: string;
    imgSrc: string;
    link: string;
    selected: boolean;
}

interface CardProps {
    item: CardItem;
    click: (item: CardItem) => void;
}

function Card({ item, click }: CardProps) {
    return (
        <div className="d-inline-block o-card" onClick={() => click(item)}>
            <img className="o-card-image" src={item.imgSrc} alt={item.title} />
            {item.selected && <CardInfo title={item.title} subTitle={item.subTitle} link={item.link} />}
        </div>
    );
}

export default Card;
