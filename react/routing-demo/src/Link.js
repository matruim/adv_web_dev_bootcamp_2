import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const App = () => (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <div style={{fontSize: '3em', margin:'25px'}}>
            <SwitchDemo/>
        </div>
    </div>
);

export default App;