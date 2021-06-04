import React, { Component } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import HeaderNav from './components/header';
import Main from "./components/main";


class App extends Component{
  render(){
    return (
      
      <div className="demo-big-content">
    <Layout>
        <HeaderNav />
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
