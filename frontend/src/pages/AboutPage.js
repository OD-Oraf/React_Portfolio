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
                        Hello, My namee is {}. I am a software engineer specialized in full stack development using Java(Spring/Spring Boot), JavaScript React(JavaScript) and Python(Django).
                        For my applications I tend to use postgresql.   
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