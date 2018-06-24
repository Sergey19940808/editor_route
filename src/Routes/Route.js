import React, { Component } from 'react';
import './Routes.css';

class Route extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="route">
                <li className="route__element">{this.props.route}</li>
            </div>
        );
    }
}

export default Route;