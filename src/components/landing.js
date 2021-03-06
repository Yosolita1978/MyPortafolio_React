import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


class LandingPage extends Component{
    render(){
      return (
        <div style={{width:'100%', margin: 'auto' }}>
            <Grid className="landing-grid">
                <Cell col={12}>

                    <div className="profile-img"> </div>                  
                    <div className="banner-text">
                        <h1>Mobile Developer </h1>
                        <hr />

                        <p>Python | JavaScript | Java | React | React Native | Android</p>

                        <div className="social-links">

{/* LinkedIn */}
<a href="https://www.linkedin.com/in/crissrodriguez/" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-linkedin-square" aria-hidden="true" />
</a>

{/* Github */}
<a href="https://github.com/Yosolita1978" rel="noopener noreferrer" target="_blank">
  <i className="fa fa-github-square" aria-hidden="true" />
</a>

{/* Google Store */}
<a href="http://google.com" rel="noopener noreferrer" target="_blank">
  <i className="fab fa-google-play" aria-hidden="true" />
</a>


</div>

                    </div>

                </Cell>
            </Grid>

        </div>
      );
    }
  }
  
  export default LandingPage;