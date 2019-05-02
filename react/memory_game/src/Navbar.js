import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component{
    static defaultProps = {
        onNewGame(){}
    }
    
    static propTypes = {
        onNewGame: PropTypes.func.isRequired
    }
    
    render(){
        return (
                <header>
                    <h2><a>Memory Game</a></h2>
                    <nav>
                      <li><a onClick={this.props.onNewGame}>New Game</a></li>
                    </nav>
                </header>
            );
    }
}

export default Navbar;