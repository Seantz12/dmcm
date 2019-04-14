import React, { Component } from 'react';

class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {app: null, type: this.props.type};
        this.updateWidget = this.updateWidget.bind(this);
    }

    updateWidget() {
        this.setState(state => state.type = 'clicked');
    }

    render() {
        return (
            <div className="widget">
                <h1>this is a widget! {this.state.key} {this.state.type}</h1>
                <button onClick={this.updateWidget}>click</button>
            </div>
        )
    }
}

export default Widget;