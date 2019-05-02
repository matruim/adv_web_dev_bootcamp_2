import React, { Component } from 'react';
import './App.css';
import {NavLink} from 'react-router-dom'
import SwitchDemo from './SwitchDemo'

class App extends Component {
  render() {
    
    const active = {textDecoration: 'none', cursor: 'default', color:'grey'};
    const defaultStyle = {margin: '5px'}
    return (
      <div className="App">
        <NavLink style={defaultStyle} activeStyle={active} to='/'>
          HOME
        </NavLink>
        <NavLink style={defaultStyle} activeStyle={active} to='/about'>
          ABOUT
        </NavLink>
        <div style={{fontSize:'3em', margin:'25px'}} >
          <SwitchDemo />
        </div>
      </div>
    );
  }
}

export default App;
