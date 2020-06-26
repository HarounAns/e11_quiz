import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CardModal extends React.Component {
    constructor(props) {
        super(props);

    }

    createModal = () => {
        return (
            <div>
                <Modal isOpen={this.props.isOpen}>
                    <ModalHeader className="modal-header"><span>You are <h3>{this.props.name}</h3></span></ModalHeader>
                    <ModalBody className="modal-content">
                            <h1>{this.props.about}</h1>
                    </ModalBody>
                    <ModalFooter className="modal-footer">
                        <button type="button" onClick={this.props.closeModal} class="btn btn-secondary">Close</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

    render() {
        return (
            <div>{
                this.createModal()}
            </div>
        )
    }
}