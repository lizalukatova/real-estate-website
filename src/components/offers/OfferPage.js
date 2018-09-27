import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as offerActions from '../../actions/Offer';
import { Container, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import DocumentMeta from 'react-document-meta';

import Advantages from '../../components/common/Advantages';
import Gallery from '../../components/common/Gallery';

import Spinner from "../common/Spinner";

class OfferPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };

        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        const { match: { params } } = this.props;

        this.props.actions.loadOfferDetails(params.slug).then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearOfferDetails();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {offer, offerImages} = this.props;

        const meta = {
            title: offer.name,
            description: `ЖК Малахит ${offer.name}`,
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1 margin-b-0">Акции</div>
                    <Link to={'/offers'} className="go-back">Вернуться к акциям</Link>

                    <Spinner isLoaded={this.state.isLoaded}/>

                    <Row className={this.state.isLoaded ? "pb-4" : "d-none"}>
                        <Col lg="7" md="12" sm="12" xs="12">
                            <div className="offer">
                                <div className="offer__title">{offer.name}</div>
                                <div className="offer__text text_18">{ ReactHtmlParser(offer.description) }</div>
                                {offer.document? <a href={offer.document} className="docs__link docs__link_large" target="_blank" download>
                                    <span>Положение об Акции</span></a>
                                    : null}
                            </div>
                        </Col>

                        {offerImages && offerImages.length ? <Col lg={{size: 5, offset: 0}} md={{size: 6, offset: 3}} sm={{size: 8, offset: 2}} xs="12">
                            <div className="offer__photos__header" />
                                <Gallery images={offerImages} thumbClass="offer-gallery__thumb" galleryClass="offer-gallery" />
                            </Col> : null}
                    </Row>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

OfferPage.propTypes = {
    offer: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    offerImages: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        offer: state.offer,
        offerImages: state.offer.inside_img.map((item) => {
            return {src : item}
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, offerActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(OfferPage);