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
            <CardTitle style={{color: '#fff', height: '176px'}} >React Native</CardTitle>
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