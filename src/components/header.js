import React, { Component } from 'react';
import { Header, Navigation, Drawer, Layout } from 'react-mdl';
import { Link } from "react-router-dom";


class HeaderNav extends Component{
    render(){
      return (
        <div className="demo-big-content" >
          <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Cristina Rodriguez</Link>} scroll>
              <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <a href="https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/CristinaCV2021.pdf?raw=true">Resume</a>
                  <a href="mailto:yosola@gmail.com">Contact Me</a>
                </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Cristina Rodriguez</Link>}>
            <Navigation>
            <Link to="/aboutme">About Me</Link>
            <Link to="/projects">Projects</Link>
            <a href="https://github.com/Yosolita1978/MyPortafolio_React/blob/main/public/CristinaCV2021.pdf?raw=true">Resume</a>
            <a href="mailto:yosola@gmail.com">Contact Me</a>
            </Navigation>
        </Drawer>
          
          </Layout>
      </div>
      );
    }
  }
  
  export default HeaderNav;