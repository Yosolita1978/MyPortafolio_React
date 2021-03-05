import React from 'react';
import { Route, Switch } from 'react-router';
import AboutMe from './aboutme';
import Contact from './contact';
import LandingPage from './landing';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>


)

export default Main;