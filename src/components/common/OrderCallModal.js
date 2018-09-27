import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import OderCallForm from '../../components/common/OderCallForm';

export default class OrderCallModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Записаться на экскурсию</ModalHeader>
                    <ModalBody>
                        <OderCallForm/>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

OrderCallModal.propTypes = {
    onRef: PropTypes.func.isRequired
};