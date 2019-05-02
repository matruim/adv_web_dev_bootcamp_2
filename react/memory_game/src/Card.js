import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = (props) =>{
    let style = {};
    if(props.showing){
        style.backgroundColor = props.backgroundColor;
    }
    return (
            <div 
                className="card-container"
                onClick={props.onClick}
                style={style}
            />
        );
};

Card.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showing: PropTypes.bool.isRequired
};

export default Card;