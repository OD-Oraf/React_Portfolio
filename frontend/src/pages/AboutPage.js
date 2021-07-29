import React from 'react'; 

import Hero from '../components/Hero';
import Content from '../components/Content';

// bootstrap imports   
import Container from 'react-bootstrap/Container'; 

function AboutPage(props){

    return(
        <Container> 
            {/* <p> Home Works! </p>  */}
            <div> 
                <Hero title={props.title}/> 

                <Content>
                    <p> 
                        Hello, My names OD and I currently work with full stack engineering using React and Django. 
                        In addition to practicing React/Django, I'm also learning NodeJS,ExpressJS and MongoDB. 
                    </p>
                    <p> 
                        In addition to full stack engineering, 
                        I also have experience with python in a data science setting performing tasks such as data cleaning and visualization.
                    </p>

                    <p> 
                        Currently I'm working on an E-Commerce web-application for a new watch company, which is being developed using React and Django
                    </p>
                </Content>
            </div>


        </Container>
        
    )
}

export default AboutPage; 