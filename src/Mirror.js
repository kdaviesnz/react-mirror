import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Mirror extends React.Component {
    render() {
        return (
            <div>
                {this.props.children("mirrorHorizontal")}
            </div>
        );
    }
}

Mirror.propTypes = {
    children: PropTypes.func.isRequired,
}

export default Mirror;
