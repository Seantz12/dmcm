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

class CharacterWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            created: false,
            name: null,
            str: null,
            dex: null,
            cha: null,
            wis: null,
            con: null,
            int: null,
            skills: {},
            features: {}
        };
        this.createCharacterWizard = this.createCharacterWizard.bind(this);
    }

    createCharacterWizard() {
        console.log("this is when I'd create a character")
        this.setState(state => state.created = true);
    }

    render() {
        var mainDisplay;
        if(!this.state.created) {
            mainDisplay = <button onClick={this.createCharacterWizard}>
                            Create Character
                            </button>;
        } else {
            mainDisplay = <p>agh</p>;
        }
        return (
            <div className="map">
            {mainDisplay}
            </div>
        )
    }
}

export default Widget;