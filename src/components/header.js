import React, { Component } from 'react';
import { Header, Navigation } from 'react-mdl';
import { Link } from "react-router-dom";

class HeaderNav extends Component{
    render(){
      return (
        <div className="demo-big-content">
        <Header className="header-color" title="Cristina Rodriguez" scroll>
              <Navigation>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contacts</Link>
                </Navigation>
          </Header>
      </div>
      );
    }
  }
  
  export default HeaderNav;