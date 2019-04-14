import React, { Component } from 'react';
import Widget from './Widget'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { widgets: [], count: 0 };
        this.createWidget = this.createWidget.bind(this);
    }

    createWidget(widgetType) {
        var widget = { key: this.state.count, type: widgetType};
        console.log(widget.key);
        this.setState(state => ({
            widgets: state.widgets.concat([widget]),
            count: ++state.count
        }));
        console.log('created?')
    }

    render() {
        console.log(this.state.widgets);
        return (
            <div className="dashboard">
                <button onClick={() => this.createWidget("map")}>Create Map Widget</button>
                <button onClick={() => this.createWidget("character")}>Create character Widget</button>
                <div id="widgetLocation">
                {this.state.widgets.map(widget => (
                    <Widget key={widget.key} type={widget.type}/>
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