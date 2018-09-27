import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/Event';
import * as offerActions from '../../actions/Offer';
import * as seoActions from '../../actions/Seo';

import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';

import MainSlider from '../../components/main/MainSlider';
import Advantages from '../../components/common/Advantages';
import Map from '../../components/main/Map';
import OderExcursionForm from '../../components/main/OderExcursionForm';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.loadLastEvents();
        this.props.actions.loadLastOffers();
        this.props.actions.loadSeo();
    }

    render() {
        const {events, offers, seo} = this.props;

        const meta = {
            title: seo.title ? seo.title : "ЖК Малахит",
            description: seo.description ? seo.description : "ЖК Малахит",
        };

        return (
            <main>
                <DocumentMeta {...meta} />

                <MainSlider slides={offers} />

                <div className="bg_gray">
                    <Container>
                        <Row className="text-right">
                            <Col>
                                <Link to={'/kvartiry'} className="button button_gradient button_search-apt">Подобрать квартиру</Link>
                            </Col>
                        </Row>
                        <h1 className="header-1">{seo.h1 ? seo.h1 : 'Жилой квартал Малахит'}</h1>
                        <div dangerouslySetInnerHTML={{__html: seo.text}} />
                        <div className="header-1">События</div>
                        <Row>
                            {events && events.length > 0 ? events.map((event, id) =>
                                <Col xs="12" md="4" key={id}>
                                    <Link to={`/events/${event.slug}`} className="event-card">
                                        <div className="event-card__icon"/>
                                        <div className="event-card__title">{event.name}</div>
                                        <div className="event-card__text">{ReactHtmlParser(event.short_desc)}</div>
                                        <div className="event-card__text">{event.date}</div>
                                    </Link>
                                </Col>
                            ) : null}
                        </Row>
                    </Container>
                </div>

                <div>
                    <Container>
                        <div className="header-1">Планировки</div>
                        <div className="plans-links">
                            <Link to={{ pathname: '/kvartiry/odnokomnatnye' }} className="plans-link plans-link_one">комнатные и студии</Link>
                            <Link to={{ pathname: '/kvartiry/dvuhkomnatnye' }} className="plans-link plans-link_two">комнатные</Link>
                            <Link to={{ pathname: '/kvartiry/trehkomnatnye' }} className="plans-link plans-link_three">комнатные</Link>
                            <Link to={{ pathname: '/kvartiry/s-terrasoy' }} className="plans-link plans-link_terrace">Квартиры с террасой</Link>
                        </div>
                    </Container>
                </div>

                <Advantages />

                <OderExcursionForm />

                <Map />
            </main>
        );
    }
}


MainPage.propTypes = {
    events: PropTypes.array.isRequired,
    offers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    seo: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        events: state.events,
        offers: state.offers,
        seo: state.seo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, eventActions, offerActions, seoActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);