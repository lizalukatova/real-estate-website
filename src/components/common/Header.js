import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import homeLogo from '../../images/common/main_logo.svg';
const counter = window.yaCounter40165370;

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
        this.openModal = this.openModal.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.sendCounter = this.sendCounter.bind(this);

        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('touchstart', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('touchend', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({isOpen: false});
        }
    }

    toggleMenu() {
        const windowWidth = window.innerWidth;
        const breakpoint = 992;

        if (windowWidth < breakpoint) {
            this.setState((prevState) => ({
                isOpen: !prevState.isOpen
            }));
        }
    }

    openModal() {
        this.props.modal();
        counter.reachGoal('form_header');
        console.log('yacounter form_header sent');
        return true;
    }

    sendCounter() {
        counter.reachGoal('call_namber');
        console.log('yacounter call_namber sent');
        return true;
    }

    render() {
        return (
            <div ref={this.setWrapperRef}>
                <header>
                    <Navbar light expand="lg">
                        <div className="container align-items-lg-end">
                            <NavLink exact={true} className="navbar-brand" to='/'>
                                <img src={homeLogo} alt="Logo" className="img-fluid" />
                            </NavLink>

                            <a className="d-lg-none top-navs__phone" href="tel:+73832090703" onClick={this.sendCounter}>+7 (383) 209-07-03</a>
                            <div className="d-none d-sm-block d-md-block d-lg-none button button_header button_gradient" onClick={this.openModal}>Запись на экскурсию</div>
                            <NavbarToggler onClick={this.toggleMenu} />

                            <Collapse className="top-navs" isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto top-navs__top" navbar>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/events'>События</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/faq'>Вопрос-ответ</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/company'>Управляющая компания</NavLink>
                                    </NavItem>

                                    <div className="d-none d-lg-block button button_header button_gradient" onClick={this.openModal}>Запись на экскурсию</div>

                                    <a className="d-none d-lg-inline top-navs__phone" href="tel:+73832090703" onClick={this.sendCounter}>+7 (383) 209-07-03</a>
                                </Nav>

                                <Nav className="ml-auto top-navs__bottom" navbar>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/kvartiry'>Квартиры</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/plans'>Генплан</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/buying'>Как купить</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/offers'>Акции</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/about'>О комплексе</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/photos'>Ход строительства</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink onClick={this.toggleMenu} className="nav-link" activeClassName='active' to='/contact'>Контакты</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </header>

                <div className="header-push" />
            </div>
        );
    }
}

Header.propTypes = {
    modal: PropTypes.func.isRequired
};
