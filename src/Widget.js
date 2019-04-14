import React, { Component } from 'react';

class Widget extends Component {
    constructor(props) {
        super(props);
        this.updateWidget = this.updateWidget.bind(this);
    }

    updateWidget() {
        this.setState(state => state.type = 'clicked');
    }

    render() {
        var app;
        if(this.props.type === "map") {
            app = <MapWidget />
        }
        return(
            <div className="widget">
                <h1>this is a widget! {this.props.type}</h1>
                {app}
            </div>
        )
    }
}

class MapWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {map: null};
    }

    render() {
        return (
            <div className="map">
                <img src="./logo.svg" alt="wah"></img>
            </div>
        )
    }
}

export default Widget;