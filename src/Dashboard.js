import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {widgetCount: 0};
    }

    render() {
        return (
            <div className="dashboard">
                <h1> this is where i'd put my widgets</h1>
            </div>
        )
    }
}