import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

interface HomePageProps {
    title?: string;
    subTitle?: string;
    text?: string;
}

function HomePage({ title, subTitle, text }: HomePageProps) {
    return (
        <div>
            <Hero title={title} subTitle={subTitle} text={text} />
            <Carousel />
        </div>
    );
}

export default HomePage;
