import React, { Component } from 'react';
// import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Copyright from "./components/Copyright";
import { Divider } from "semantic-ui-react";
import './App.css';

class App extends Component {

  render() {
    return(
      <div style={{paddingBottom: "30px"}}>

      {/* <Navbar /> */}
      <Main />
       <Divider />
      <Bio />
       <Divider />
      <Projects />
        <Divider />
      <ContactMe />
      <Copyright />
      
      </div>
    )
  }
};

export default App;
