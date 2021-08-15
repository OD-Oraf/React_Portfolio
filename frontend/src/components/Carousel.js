import React from 'react';

// Bootstrap Imports  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

// Component Imports  
import Card from '../components/Card';

// Image Imports  
// import TRVL from '../assets/images/TRVL_card.png'; 
import BTRE from '../assets/images/BTRE_card.png'; 
import ENOVE from '../assets/images/ENOVE_card.png'; 
import ORB from '../assets/images/Resume_Builder_card.png';

/* class x extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            array of objects
            arr: [
                {obj 1}
                {obj 2}
                {obj 3}

            ]
        }
    }
}


*/

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'ORB-(Od\'s Resume Builder)',
                    subTitle: 'Application to enter and information and format resume into one of 3 templates',
                    imgSrc: ORB, 
                    link: 'http://resume-portal.us-west-2.elasticbeanstalk.com/',
                    selected: false
                },

                {
                    id: 1,
                    title: 'Enove',
                    subTitle: 'Demo built using React, Django w/ RestFramework,Postgresql. Please wait about a minute for load time as Im using free hosting.',
                    imgSrc: ENOVE, 
                    link: 'https://enove.herokuapp.com/#/',
                    selected: false
                },

                {
                    id: 2,
                    title: 'BT Real Estate',
                    subTitle: 'Real Estate/Market place mockup made with Bootstrap-4, Django and PostgreSQL. Please wait about a minute for load time as Im using free hosting.',
                    imgSrc: BTRE, 
                    link: "http://134.209.76.22",
                    selected: false 
                },

                // {
                //     id: 2,
                //     title: 'TRVL',
                //     subTitle: 'Travel Site Mockup made in React',
                //     imgSrc: TRVL, 
                //     link: 'https://react-websitev1.herokuapp.com/',
                //     selected: false
                // }, 

                 
                
                
            ]
        }        
        }


    //Card Click method     
    handleCardClick= (id, card) => {
        let items = [...this.state.items];
        // toggle 
        items[id].selected = items[id].selected ? false : true;  
        // Array Loop  
        //Execute this function on each elm in array
        items.forEach (item => {
            if (item.id !== id) {
                item.selected = false;
            }   
        }); 
        this.setState ({
            items 
        }); 
    }

    // Make Items method  
    makeItems = (items) => {
        return (
            items.map(item => {
                // e for event 
                return <Card item={item} click={( e => this.handleCardClick (item.id, e ))} key= {item.id} />
            } )
        )
    }

    render(){
        return (
            // <p> Carousel works</p>
            <Container fluid={true}> 
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}    
                </Row>
            </Container>
        );
    }

} 

export default Carousel; 