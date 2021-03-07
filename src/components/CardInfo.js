import React from 'react'; 
import {useSpring, animated} from 'react-spring'; 
function CardInfo (props) {

    // react spring
    const style= useSpring({opacity: 1, from:{opacity: 0}});  

    // <p> Card Info Works</p>

    return (
        <animated.div className="o-card-info" style={style}>

            <p className = "o-card-title"> {props.title} </p>
            <p className= "o-card-sub-title"> {props.subTitle} </p>
            <a href={ props.link } target="_blank" rel= "noopener noreferrer"> View </a>
        </animated.div>
    ) 
}

export default CardInfo; 