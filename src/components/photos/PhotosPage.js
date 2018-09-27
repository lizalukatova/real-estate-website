import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as photoActions from '../../actions/Photo';
import { Container } from 'reactstrap';
import DocumentMeta from 'react-document-meta';

import Advantages from '../../components/common/Advantages';
import PhotosTabs from "../photos/PhotosTabs";
import Spinner from "../common/Spinner";

class PhotosPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 1,
            isLoaded: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadPhotos().then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearPhotos();
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {photos} = this.props;

        const meta = {
            title: 'Фотоотчет о стройке',
            description: 'Фотоотчет о стройке'
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container className="pb-3 position-relative">
                    <div className="header-1 mb-5">Фотоотчет о стройке</div>
                    <div className="lizard_photo" />

                    <Spinner isLoaded={this.state.isLoaded}/>

                    {Object.keys(photos).sort().reverse().map((key, i) => {
                        const months = photos[key];

                        return <div key={i}>
                            <p className="text_18 font-weight-bold">{key} год</p>
                            <PhotosTabs months={months} />
                        </div>
                    })}
                </Container>

                <Advantages/>
            </div>
        );
    }
}

PhotosPage.propTypes = {
    photos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        photos: state.photos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, photoActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(PhotosPage);