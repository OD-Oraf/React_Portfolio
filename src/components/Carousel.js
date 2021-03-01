import React from 'react';

// Bootstrap Imports  
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

// Component Imports  
import Card from '../components/Card';

// Image Imports  
import devgrub from '../assets/images/devgrub.png'; 
import lake from '../assets/images/lake.jpg'; 
import mountain from '../assets/images/mountain.jpg'; 

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
                    title: 'Project 1',
                    subTitle: 'This is a description about project 1',
                    imgSrc: devgrub, 
                    link: 'https://www.google.com/',
                    selected: false
                }, 
                {
                    id: 1,
                    title: 'Project 2',
                    subTitle: 'This is a description about project 2',
                    imgSrc: lake, 
                    link: 'https://www.google.com/',
                    selected: false 
                },
                {
                    id: 2,
                    title: 'Project 3',
                    subTitle: 'This is a description about project 3',
                    imgSrc: mountain , 
                    link: 'https://www.google.com/',
                    selected: false
                },
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