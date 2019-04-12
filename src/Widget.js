import React, { Component } from 'react';

class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {app: null};
    }

    render() {
        return (
            <div className="widget">
                <h1>this is a widget!</h1>
            </div>
        )
    }
}

export default Widget;