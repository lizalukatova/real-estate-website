import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/Event';
import { Container, Row, Col } from 'reactstrap';
import Advantages from '../../components/common/Advantages';
import DocumentMeta from 'react-document-meta';

import newsLizardImg from "../../images/common/lizards/lizard_news.png";

import Spinner from "../common/Spinner";


class EventsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };

        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadEvents().then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearEvents();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {events} = this.props;

        const meta = {
            title: 'События',
            description: 'ЖК Малахит События'
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1">События</div>

                    <Spinner isLoaded={this.state.isLoaded}/>

                    <Row className="pb-5">
                        <Col lg="9" sm="8" xs="12">
                        {events.length > 0 ? events.map((event, id) =>
                            <p key={id}>
                                <span className="docs__date">{event.date}</span>
                                <Link to={`/events/${event.slug}`} className="link_green event__link">
                                    {event.name}
                                </Link>
                            </p>
                        ) : this.state.isLoaded ? <Col><p className="text_18">В данный момент событий нет</p></Col>
                            : null}
                        </Col>

                        <Col lg="3" sm="4" className="text-center">
                            <img src={newsLizardImg} className="img-fluid lizard_event" />
                        </Col>
                    </Row>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

EventsPage.propTypes = {
    events: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        events: state.events
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, eventActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EventsPage);