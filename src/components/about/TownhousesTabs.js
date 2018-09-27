import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Gallery from '../../components/common/Gallery';
import TownhouseApt2Img from '../../images/about/townhouse_flat_2.jpg';
import TownhouseApt2Plan from '../../images/about/townhouse_flat_2_plan.jpg';
import TownhouseApt4Img from '../../images/about/townhouse_flat_4.jpg';
import TownhouseApt4Plan from '../../images/about/townhouse_flat_4_plan.jpg'
import TownhouseApt5Img from '../../images/about/townhouse_flat_5.jpg';
import TownhouseApt5Plan from '../../images/about/townhouse_flat_5_plan.jpg'
import TownhouseLand1 from '../../images/about/land_1.jpg'
import TownhouseLand2 from '../../images/about/land_2.jpg'

const TownhouseApt2Images = [
    { src: TownhouseApt2Img},
    { src: TownhouseApt2Plan},
];

const TownhouseApt4Images = [
    { src: TownhouseApt4Img},
    { src: TownhouseApt4Plan},
];

const TownhouseApt5Images = [
    { src: TownhouseApt5Img},
    { src: TownhouseApt5Plan},
];

const TownhouseLand1Images = [
    { src: TownhouseLand1},
];

const TownhouseLand2Images = [
    { src: TownhouseLand2},
];

export default class DocsTabs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Row className="margin-b-60">
                    <Col md="3" sm="12" xs="12">
                        <Nav tabs className="docs-tabs">
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>
                                    Таунхаус. Квартира №2
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>
                                    Таунхаус. Квартира №4
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>
                                    Таунхаус. Квартира №5
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}>
                                    Земельный участок №1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classnames({ active: this.state.activeTab === '5' })} onClick={() => { this.toggle('5'); }}>
                                    Земельный участок №2
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md="1" className="d-none d-md-block">
                        <div className="docs-line" />
                    </Col>
                    <Col md="8" sm="12" xs="12">
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col md="8">
                                        <Gallery images={TownhouseApt2Images} thumbClass="simple-gallery__thumb" />
                                    </Col>
                                    <Col md="4">
                                        <p className="text_18_sm">ул Затонского, 157</p>
                                        <p className="text_18_sm">Общая площадь: 226 кв.м.</p>
                                        <p className="text_green_large">7 200 000 руб.</p>
                                        <p className="text_18_sm">31 858,4 руб./кв.м.</p>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col md="8">
                                        <Gallery images={TownhouseApt4Images} thumbClass="simple-gallery__thumb" />
                                    </Col>
                                    <Col md="4">
                                        <p className="text_18_sm">ул. Затонского, 158</p>
                                        <p className="text_18_sm">Общая площадь: 352 кв.м.</p>
                                        <p className="text_green_large">12 500 000 руб.</p>
                                        <p className="text_18_sm">35 511, 36 руб./кв.м.</p>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col md="8">
                                        <Gallery images={TownhouseApt5Images} thumbClass="simple-gallery__thumb" />
                                    </Col>
                                    <Col md="4">
                                        <p className="text_18_sm">ул Затонского, 157</p>
                                        <p className="text_18_sm">Общая площадь: 226 кв.м.</p>
                                        <p className="text_green_large">7 200 000 руб.</p>
                                        <p className="text_18_sm">31 858,4 руб./кв.м.</p>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                    <Col md="8">
                                        <Gallery images={TownhouseLand1Images} thumbClass="simple-gallery__thumb" />
                                    </Col>
                                    <Col md="4">
                                        <p className="text_18">Площадь: 1198 кв.м.<br/>
                                            Кадастровый номер:<br/>
                                            54 : 19 : 112001 : 877 </p>
                                        <p className="text_green_large">2500 руб./кв.м.</p>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="5">
                                <Row>
                                    <Col md="8">
                                        <Gallery images={TownhouseLand2Images} thumbClass="simple-gallery__thumb" />
                                    </Col>
                                    <Col md="4">
                                        <p className="text_18">Площадь: 1200 кв.м.<br/>
                                            Кадастровый номер:<br/>
                                            54 : 19 : 112001 : 833 </p>
                                        <p className="text_green_large">2500 руб./кв.м.</p>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}