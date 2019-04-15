import React, { Component } from 'react';

class MapWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {map: null};
    }

    render() {
        return (
            <div className="map">
                <img src="ver1.png" alt="wah" style={{height: "100px"}}></img>
            </div>
        )
    }
}

export default MapWidget;