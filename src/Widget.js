import React, { Component } from 'react';

class Widget extends Component {
    constructor(props) {
        super(props);
        console.log('am i created ' + this.props.count);
        this.state = {app: null, count: this.props.count};
        this.updateWidget = this.updateWidget.bind(this);
    }

    updateWidget() {
        this.setState(state => ({
            count: ++state.count
        }));
        console.log(this.state.count);
    }

    render() {
        console.log('test');
        return (
            <div className="widget">
                <h1>this is a widget! {this.state.count}</h1>
                <button onClick={this.updateWidget}>click</button>
            </div>
        )
    }
}

export default Widget;