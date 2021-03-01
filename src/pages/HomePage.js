import React from 'react'; 

// components imports 
import Hero from '../components/Hero.js';
import Carousel from '../components/Carousel.js';

function HomePage(props){

    return(
        <div>
            {/* Parameters passed into Hero object(component) */}
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

            <Carousel />
        </div>
    );
}

export default HomePage; 