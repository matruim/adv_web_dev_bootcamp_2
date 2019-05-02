import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

const Homepage = () => (<div>HOMEPAGE</div>);
const Aboutpage = () => (<div>ABOUT</div>);
const Namepage = ({match}) => (<div>Hello, {match.params.name}</div>)

const SwitchDemo = () => (
    <Switch>
        <Route exact path="/about" component={Aboutpage} />
        <Route exact path="/:name" component={Namepage} />
        <Route exact path="/" component={Homepage} />
    </Switch>
);

export default SwitchDemo;