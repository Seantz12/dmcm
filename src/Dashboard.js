import React, { Component } from 'react';
import Widget from './Widget'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { widgets: new Array() };
        this.createWidget = this.createWidget.bind(this);
        console.log(typeof(this.state.widgets))
    }

    createWidget() {
        var widget = new Widget();
        this.setState(state => (state.widgets.push(widget)));
        console.log('created?')
    }

    render() {
        return (
            <div className="dashboard">
                <button onClick={this.createWidget}>Create Widget</button>
                {this.state.widgets}
                <h1> this is where i'd put my widgets</h1>
                <h2> IF I HAD ANY </h2>
                <h3> :(( </h3>
            </div>
        )
    }
}

export default Dashboard;