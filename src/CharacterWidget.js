import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

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
            features: {},
            modalShow: false
        };
        this.createCharacterWizard = this.createCharacterWizard.bind(this);
    }

    createCharacterWizard() {
        console.log("this is when I'd create a character")
        this.setState(state => {
            state.created = true;
            console.log("I did it!")
        });
        console.log("I did it! you biytch")
    }

    render() {
        var mainDisplay;
        var modalClose = () => this.setState({ modalShow: false })
        if(!this.state.created) {
            mainDisplay = <button onClick={() => {this.createCharacterWizard(); this.setState({ modalShow: true});} }>
                            Create Character
                            </button>;
        } else {
            mainDisplay = <p>agh</p>;
        }
        return(
            <div className="character">
            {mainDisplay}
            <CharacterModal show={this.state.modalShow} onHide={modalClose} />
            </div>
        )
    }
}

class CharacterModal extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
          </p>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CharacterWidget;