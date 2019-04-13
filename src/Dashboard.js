import React, { Component } from 'react';
import Widget from './Widget'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { widgets: [], count: 0 };
        this.createWidget = this.createWidget.bind(this);
        console.log(typeof(this.state.widgets))
    }

    createWidget() {
        var widget = new Widget({count: this.state.count});
        this.setState(state => ({
            widgets: state.widgets.concat([widget]),
            count: ++state.count
        }));
        console.log('created?')
        console.log(this.state.widgets);
    }

    render() {
        return (
            <div className="dashboard">
                <button onClick={this.createWidget}>Create Widget</button>
                <div id="widgetLocation">
                {this.state.widgets.map(widget => (
                    <Widget count={0}/>
                    ))} 
                </div>
                <h1> this is where i'd put my widgets</h1>
                <h2> IF I HAD ANY </h2>
                <h3> :(( </h3>
            </div>
        )
    }
}

export default Dashboard;