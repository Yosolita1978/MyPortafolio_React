import React, { Component } from 'react';
import rainbowify from '@ahl389/react-rainbowify';

class Paragraph extends Component{
    
    render(){
        const customColors = ['#d22963', '#ff5200', '#8a2db8', '#49a564'];
      return (
          rainbowify(<><h1>Happy Pride Month</h1>
            <p>Hi! My name is Cristina Rodriguez, and I am a software engineer with a background in journalism and communications.
            I received training from Hackbright Academy, an engineering bootcamp for women in San Francisco (graduation: March 2017).
            I was a recipient of the 2018 Grow Scholarship from Google and Udacity for Android Basics, and I have five apps in the Google Store.
            Now I'm studying the basics of react-native to be able to publish my apps in IOs too.
            I'm Thechtonica's Technical Project Manager. If you want to know more about Techtonica's program, feel free to reach out
            </p></>, customColors) 
      );
    }
  }
  
  export default Paragraph;