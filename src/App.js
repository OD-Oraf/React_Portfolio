import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
      title: 'OD-Oraf',

      // navbar
      headerLinks: [
        {title: 'Home' , path: '/'},
        {title: 'About' , path: '/about'},
        {title: 'Contact' , path: '/contact'},
      ],

      home:{
        title: 'Be relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },

      about: {
        title: 'About me',
        
      },

      contact: {
        title: 'Lets Talk',
        
      }
    }
  }
  render(){
    return (

      <div>
        Hello from react
      </div>
    
      );

  }
  
}

export default App;
