import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
const counter = window.yaCounter40165370;

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.sendCounter = this.sendCounter.bind(this);
    }

    openModal() {
        this.props.modal();
        counter.reachGoal('form_footer');
        console.log('yacounter form_footer sent');
        return true;
    }

    sendCounter() {
        counter.reachGoal('call_namber');
        console.log('yacounter call_namber sent');
        return true;
    }

    render() {
        return (
            <footer>
                <Container>
                    <Row>
                        <Col lg="3">
                            <p>Малахит, Новосибирск, 2018</p>
                            <a href="https://vk.com/club129677395" className="social-icon social-icon_vk" target="_blank" rel="noopener noreferrer" />
                            <a href="https://www.instagram.com/malahit_nsk/" className="social-icon social-icon_insta" target="_blank" rel="noopener noreferrer" />
                            <a href="https://facebook.com/zhkmalahit" className="social-icon social-icon_fb" target="_blank" rel="noopener noreferrer" />
                            <a href="https://ok.ru/profile/587612942134" className="social-icon social-icon_ok" target="_blank" rel="noopener noreferrer" />
                            <a href="https://www.youtube.com/channel/UCiIYyZispihnS-dt63ON2nA" className="social-icon social-icon_youtube" target="_blank" rel="noopener noreferrer" />

                            <div className="footer__line" />
                        </Col>
                        <Col lg="2" className="d-none d-md-block">
                            <NavLink className="footer__nav" to='/kvartiry'>Квартиры</NavLink>
                            <NavLink className="footer__nav" to='/plans'>Генплан</NavLink>
                            <NavLink className="footer__nav" to='/buying'>Как купить</NavLink>
                            <NavLink className="footer__nav" to='/offers'>Акции</NavLink>
                            <NavLink className="footer__nav" to='/about'>О комплексе</NavLink>
                            <NavLink className="footer__nav" to='/about/company'>Документация</NavLink>
                        </Col>
                        <Col lg="4" className="d-none d-md-block">
                            <NavLink className="footer__nav" to='/photos'>Ход строительства</NavLink>
                            <NavLink className="footer__nav" to='/events'>События</NavLink>
                            <NavLink className="footer__nav" to='/faq'>Вопрос-ответ</NavLink>
                            <NavLink className="footer__nav" to='/company'>Управляющая компания</NavLink>
                            <NavLink className="footer__nav" to='/contact'>Контакты</NavLink>

                            <div className="footer__line" />
                        </Col>
                        <Col lg="3">
                            <p>ОФИС ПРОДАЖ</p>
                            <a href="tel:+73832090703" className="footer__phone" onClick={this.sendCounter}>+7 (383) 209-07-03 </a>
                            <p><a className="footer__link" href="mailto:op@malahit-nsk.ru" target="_blank" rel="noopener noreferrer">op@malahit-nsk.ru</a></p>
                            <p>ул. Челюскинцев, д. 14/2, офис 507</p>
                            <div className="button button_yellow button_footer" onClick={this.openModal}>Запись на экскурсию</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="footer__dev">Разработка сайта: <a className="footer__link" href="https://art-glos.com/" target="_blank" rel="noopener noreferrer">ГЛОС</a></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    modal: PropTypes.func.isRequired
};
