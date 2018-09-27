import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as houseActions from '../../actions/House';
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';

import Advantages from '../../components/common/Advantages';
import HouseSlider from '../../components/plans/HouseSlider';

import IconPlus from '../../images/common/icons/ic_plus.png';

import Spinner from "../common/Spinner";


class HousePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };

        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        this.props.actions.loadHouseDetails(params.slug).then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearHouseDetails();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {house, sliderImg} = this.props;

        const meta = {
            title: `Дом №${house.house_number}`,
            description: `ЖК Малахит Дом №${house.house_number}`,
        };
        let status = "";
        if (!house.complete_status) {
            status = `Сдача ${house.quarter} квартал ${house.year} г.`;
        } else {
            status = "Дом сдан";
        }
        return (
            <div>
                <DocumentMeta {...meta} />

                <Spinner isLoaded={this.state.isLoaded}/>

                <div className={this.state.isLoaded ? "d-block" : "d-none"}>
                    <Container>
                        <div className="header-1 margin-b-0">Дом №{house.house_number}</div>
                        <Link to={'/plans'} className="go-back">Вернуться к генплану</Link>

                        <Row>
                            <Col lg="9" md="8" sm="7" xs="12">
                                <div className="text_18">{ ReactHtmlParser(house.description) }</div>
                            </Col>
                            <Col lg="3" md="4" sm="5" xs="12">
                                <div>
                                    <img src={house.list_img} className="img-fluid mb-4"/>
                                </div>
                                <div className="apartment__date mt-0 mb-4">{status}</div>
                                <Link to={'/kvartiry'} className="button button_house button_gradient mb-5">Подобрать квартиру</Link>
                            </Col>
                        </Row>
                    </Container>

                    <div className="bg_light-yellow pt-5 pb-2">
                        <Container>
                            <Row>
                                <Col className="text-right" lg="1" sm="2" xs="3"><img src={IconPlus} className="img-fluid house__icon_plus" /></Col>
                                <Col className="mb-3" lg="2" sm="4" xs="9">
                                    <p className="text_18 font-weight-bold mb-1">Фундамент</p>
                                    <p>Монолитный</p>
                                </Col>

                                <Col className="text-right" lg="1" sm="2" xs="3"><img src={IconPlus} className="img-fluid house__icon_plus" /></Col>
                                <Col className="mb-3" lg="2" sm="4" xs="9">
                                    <p className="text_18 font-weight-bold mb-1">Внешние стены</p>
                                    <p>Кирпичная кладка и облицовочный кирпич, толщина стен составляет 65 см</p>
                                </Col>

                                <Col className="text-right" lg="1" sm="2" xs="3"><img src={IconPlus} className="img-fluid house__icon_plus" /></Col>
                                <Col className="mb-3" lg="2" sm="4" xs="9">
                                    <p className="text_18 font-weight-bold mb-1">Межквартирные стены</p>
                                    <p>Шириной в 1,5 кирпича, отделаны  штукатуркой, толщина стен составляет 38 см</p>
                                </Col>

                                <Col className="text-right" lg="1" sm="2" xs="3"><img src={IconPlus} className="img-fluid house__icon_plus" /></Col>
                                <Col className="mb-3" lg="2" sm="4" xs="9">
                                    <p className="text_18 font-weight-bold mb-1">Окна</p>
                                    <p>Пластиковые двухкамерные стеклопакеты. Широкие подоконники: 45 см. Лоджии с витражным остеклением</p>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="text-right" lg="1" sm="2" xs="3"><img src={IconPlus} className="img-fluid house__icon_plus" /></Col>
                                <Col className="mb-3" lg="2" sm="4" xs="9">
                                    <p className="text_18 font-weight-bold mb-1">Вода</p>
                                    <p>Собственная скважина глубиной 110 м и система водоочистки производства фирмы Grundfos (Дания)</p>
                                </Col>

                                <Col className="text-right" lg="1" sm="2" xs="3"><img src={IconPlus} className="img-fluid house__icon_plus" /></Col>
                                <Col className="mb-3" lg="2" sm="4" xs="9">
                                    <p className="text_18 font-weight-bold mb-1">Отопление</p>
                                    <p>Собственная газовая котельная производства компании Buderus (Германия)</p>
                                </Col>

                                <Col className="text-right" lg="1" sm="2" xs="3"><img src={IconPlus} className="img-fluid house__icon_plus" /></Col>
                                <Col className="mb-3" lg="2" sm="4" xs="9">
                                    <p className="text_18 font-weight-bold mb-1">Отделка мест общего пользования</p>
                                    <p>Пол – плитка, стены – штукатурка, покраска</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {(sliderImg && sliderImg.length) ? <Container className="pt-5 pb-5 house-slider_min-height">
                        <HouseSlider images={sliderImg} />
                    </Container> : null}

                    {house.apartments ? <div className="bg_gray pb-3">
                        <Container>
                            <div className="header-1">Планировки в этом доме</div>
                            <Row>
                                {house.apartments.map((item, i) => (
                                    <Col xs="12" md="4" key={i}>
                                        <Link to={`/kvartiry/${item.slug}`} className="plan-card">
                                            <img src={item.planning} className="img-fluid" />
                                            <div className="plan-card__title"><span>{item.type}, {item.number}</span></div>
                                            <div className="plan-card__text">{item.total_area} кв.м, {item.floor} этаж</div>
                                            <div className="plan-card__price">{item.price} руб.</div>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div> : null}
                </div>

                <Advantages/>
            </div>
        );
    }
}

HousePage.propTypes = {
    house: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    sliderImg: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        house: state.house,
        sliderImg: state.house.slider_img
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, houseActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(HousePage);