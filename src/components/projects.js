import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';



class Projects extends Component{
  onClick(){
    window.location.href="https://github.com/Yosolita1978/GratitudeList";

  };
    
    render(){
      return (
        <Grid className="landing-grid">
          <Cell col={12}>
            <h3>Check out my projects</h3>
          <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/react_logo.png?raw=true) center / cover'}} >React Native</CardTitle>
            <CardText>
            The idea is to use the Gratitude Journal therapy to build a basic react native app. The user can add inputs using a modal, and if the list item is touched, it will be deleted, and it will be updated.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://github.com/Yosolita1978/GratitudeList" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> GITHUB </a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/react_logo.png?raw=true) center / cover'}} >IoT Project</CardTitle>
            <CardText>
            I configured an AWS dash button that calls a Lyft ride to the address of my next google calendar event. I wrote a script that calls five APIs, maintaining the constraint of no written user input or output.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://www.linkedin.com/pulse/one-dashbutton-rule-them-all-cristina-rodr%C3%ADguez/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> LinkedIn Article </a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/react_logo.png?raw=true) center / cover'}} >React Native</CardTitle>
            <CardText>
            The idea is to use the Gratitude Journal therapy to build a basic react native app. The user can add inputs using a modal, and if the list item is touched, it will be deleted, and it will be updated.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://github.com/Yosolita1978/GratitudeList" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> GITHUB </a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/react_logo.png?raw=true) center / cover'}} >React Native</CardTitle>
            <CardText>
            The idea is to use the Gratitude Journal therapy to build a basic react native app. The user can add inputs using a modal, and if the list item is touched, it will be deleted, and it will be updated.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://github.com/Yosolita1978/GratitudeList" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> GITHUB </a>
            </CardActions>
            </Card>
          </div>
        </Cell>
        </Grid>
      );
    }
  }
  
  export default Projects;