import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as offerActions from '../../actions/Offer';
import { Container, Row, Col } from 'reactstrap';
import DocumentMeta from 'react-document-meta';
import Advantages from '../../components/common/Advantages';

import Spinner from "../common/Spinner";


class OffersPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };

        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadOffers().then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearOffers();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {offers} = this.props;

        const meta = {
            title: 'Акции',
            description: 'ЖК Малахит Акции'
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1">Акции</div>

                    <Spinner isLoaded={this.state.isLoaded}/>

                    <Row className="pb-5">
                        {offers.length > 0 ? offers.map((offer, id) =>
                            <Col key={id} lg="4" md="6">
                                <Link to={`/offers/${offer.slug}`} className="offer__block">
                                    <img src={offer.list_img} />
                                    <span className="offer__block__link">{offer.name} {offer.short_desc}</span>
                                </Link>
                            </Col>
                        ) : this.state.isLoaded ? <Col><p className="text_18">В данный момент акций нет</p></Col>
                        : null}
                    </Row>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

OffersPage.propTypes = {
    offers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        offers: state.offers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, offerActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OffersPage);