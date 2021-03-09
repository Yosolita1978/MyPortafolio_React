import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class AboutMe extends Component{
    render(){
      return (
        <div className="landing-grid">
        <Grid>
          <Cell col={12}>
          <div className="profile-img"> </div>
          <div className="banner-text-about"> 
            <h4>Technical Project Manager | Mobile Developer | Full Stack</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
            Hi! My name is Cristina Rodriguez, and I am a software engineer with a background in journalism and communications. <br/>
            I received training from Hackbright Academy, an engineering bootcamp for women in San Francisco (graduation: March 2017). <br/>
            I was a recipient of the 2018 Grow Scholarship from Google and Udacity for Android Basics, and I have five apps in the Google Store. <br/> 
            Now I'm studying the basics of react-native to be able to publish my apps in IOs too. <br/>
            I'm currently seeking a front-end developer role in the Greater Seattle Area. If you have a position that I should hear about, feel free to reach me out <br/>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </div>
          </Cell>
        </Grid>
      </div>
      );
    }
  }
  
  export default AboutMe;