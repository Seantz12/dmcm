import React, { Component } from 'react';
import MapWidget from './MapWidget';
import CharacterWidget from './CharacterWidget';

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
        switch(this.props.type) {
            case "map":
                app = <MapWidget />;
                break;
            case "character":
                app = <CharacterWidget />;
                break;
            default:
                console.log("something broke");
        }
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

export default Widget;