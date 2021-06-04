import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Paragraph from '../components/paragraph';




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
            <Paragraph/>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </div>)
          </Cell>
        </Grid>
      </div>
      );
    }
  }
  
  export default AboutMe;