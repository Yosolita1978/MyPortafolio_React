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
            <CardTitle style={{height: '300px', background: 'url(https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/react_logo.png?raw=true) center / cover'}} >React Native</CardTitle>
            <CardText>
            The idea is to use the Gratitude Journal therapy to build a basic react native app. The user can add inputs using a modal, and if the list item is touched, it will be deleted, and it will be updated.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://github.com/Yosolita1978/GratitudeList" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> GITHUB </a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{height: '300px', background: 'url(https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/IoT.png?raw=true) center / cover'}} ></CardTitle>
            <CardText>
            I configured an AWS dash button that calls a Lyft ride to the address of my next Google Calendar event. I wrote a script that calls five APIs, maintaining the constraint of no written user input or output.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://www.linkedin.com/pulse/one-dashbutton-rule-them-all-cristina-rodr%C3%ADguez/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> LINKEDIN</a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle id="android-id" style={{height: '300px', background: 'url(https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/knowmexico.png?raw=true) center / cover'}} >Android Developer</CardTitle>
            <CardText>
            Are you visiting Mexico? Do you know where to go according to the locals? I made an app for you. Personal recommendations of places to see, eat and drink around Mexico City.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://play.google.com/store/apps/details?id=co.yosola.knowmexico" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> DOWNLOAD</a>
            </CardActions>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '300px', background: 'url(https://camo.githubusercontent.com/43942d3778c1340758f12f6e4712a5eaf608e8f159d535ec30fb9e199c5a3e7d/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f6178384a376f4c516f562d6852303878724c5f554c54794f514362496469787a4e4d593349615f51375f6251666462555734685663577275467a4e7348686b6d4553493d77313434302d683737362d7277) center / cover'}} ></CardTitle>
            <CardText>
            This app is a little quiz with ten real questions from the naturalization test at Mexico so you can learn about Mexico and study to became a Mexican citizen having fun.
            </CardText>
            <CardActions style={{textAlign:"center"}} border>
            <a href="https://play.google.com/store/apps/details?id=com.yosola.android.mexicanquiz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "fff" }}> DOWNLOAD</a>
            </CardActions>
            </Card>
          </div>
        </Cell>
        </Grid>
      );
    }
  }
  
  export default Projects;