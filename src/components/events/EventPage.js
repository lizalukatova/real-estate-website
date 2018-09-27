import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/Event';
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';

import Advantages from '../../components/common/Advantages';
import Gallery from '../../components/common/Gallery';

import Spinner from "../common/Spinner";

class EventPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };

        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        this.props.actions.loadEventDetails(params.slug).then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearEventDetails();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {event, eventImages} = this.props;

        const meta = {
            title: event.name,
            description: `ЖК Малахит ${event.name}`,
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container className="pb-5">
                    <div className="header-1 margin-b-0">{event.name}</div>
                    <Link to={'/events'} className="go-back">Вернуться к событиям</Link>

                    <Spinner isLoaded={this.state.isLoaded}/>

                    <Row className={this.state.isLoaded ? "pb-4" : "d-none"}>
                        <Col lg="7" md="12" sm="12" xs="12">
                            <div className="offer__text text_18">{ ReactHtmlParser(event.text) }</div>
                            {event.video && event.video.length ? <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${event.video}`} allowFullScreen />
                                </div> : null}
                        </Col>

                        {eventImages && eventImages.length ? <Col lg={{size: 5, offset: 0}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs="12">
                            <div className="offer__photos__header" />
                            <Gallery images={eventImages} thumbClass="offer-gallery__thumb" galleryClass="offer-gallery" />
                        </Col> : null}
                    </Row>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

EventPage.propTypes = {
    event: PropTypes.object.isRequired,
    eventImages: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        event: state.event,
        eventImages: state.event.images.map((item) => {
            return {src : item}
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, eventActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EventPage);