import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as callbackActions from '../../actions/Callback';
import { Form, FormGroup, Label, Input, Button, Col, Container } from 'reactstrap';

import Spinner from "../common/Spinner";

const PrivacyPolicyPdf = "/files/privacy-policy.pdf";

class OderExcursionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: true,
            isFormVisible: true,
            statusMessage: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleSpinner = this.toggleSpinner.bind(this);
        this.setStatusMessage = this.setStatusMessage.bind(this);
    }

    setStatusMessage() {
        //const {message} = this.props;
        let status = '';
//TODO: Need to make a normal checker
        //if (message.status) {
            status = 'Спасибо! Мы перезвоним вам в ближайшее время.';
        //} else {
            //status = 'Извините, что-то пошло не так. Попробуйте отправить форму еще раз.'
        //}

        this.setState({
            statusMessage: status
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);


        this.toggleSpinner();
        this.props.actions.sendCallback(data).then(this.toggleSpinner).then(this.setStatusMessage);
    }

    toggleSpinner() {
        this.setState((prevState) => ({
            isLoaded: !prevState.isLoaded,
            isFormVisible: false
        }));
    }

    componentWillUnmount() {
        this.props.actions.clearCallback();
    }

    render() {
        const {isLoaded, isFormVisible, statusMessage} = this.state;

        return (
            <div id="excursion" className="anchor">
                <div className="bg_green text-light pb-4">
                    <Container>
                        <div className="header-1 mb-4">Экскурсии на жилой квартал «Малахит»</div>
                        <p className="mb-4">Приезжайте в ЖК «Малахит» и посмотрите своими глазами. Мы проводим экскурсии для всех желающих в любое время, в том числе и в выходные.
                            Во время экскурсии вы можете оценить уже готовые дома, в которых живут счастливые семьи, а также темпы и качество текущего строительства.<br/>
                            <b>Испытайте на себе гармонию единения с природой!</b>
                        </p>

                        <Spinner isLoaded={isLoaded}/>

                        <p className={isFormVisible ? "d-none" : "text_18"}>{statusMessage}</p>

                        <Form onSubmit={this.handleSubmit} className={isFormVisible ? "form_simple mt-3 mb-3" : "d-none"}>
                            <FormGroup row>
                                <Col sm={3}>
                                    <Input id="order-call_name" name="name" placeholder="Ваше имя" required />
                                </Col>
                                <Col sm={3}>
                                    <Input id="order-call_phone" name="phone_number" placeholder="Телефон" required />
                                </Col>
                                <Col sm={3}>
                                    <Button className="button button_form button_yellow">Записаться на экскурсию</Button>
                                </Col>
                            </FormGroup>
                            <FormGroup className="d-none" row>
                                <Col sm={3} xs={1} className="text-right">
                                    <FormGroup check className="checkbox">
                                        <Label check>
                                            <Input id="order-call_check" name="agreement" value="1" type="checkbox" checked required />{' '}
                                            <span className="cr"><i className="cr-icon fa fa-check" /></span>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={9} xs={11}>
                                    <p className="text_14">Я ознакомился с <a className="link text-light" href={PrivacyPolicyPdf} target="_blank" rel="noopener noreferrer">политикой конфиденциальности</a> компании и даю согласие на обработку персональных данных</p>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Container>
                </div>
            </div>
        );
    }
}


OderExcursionForm.propTypes = {
    message: PropTypes.object,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        message: state.message
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, callbackActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OderExcursionForm);