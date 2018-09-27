import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as faqActions from '../actions/Faq';
import { Container } from 'reactstrap';
import DocumentMeta from 'react-document-meta';

import Advantages from '../components/common/Advantages';
import CollapseBlock from '../components/common/CollapseBlock';

import Spinner from "./common/Spinner";


class FaqPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };

        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadFaq().then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearFaq();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {faq} = this.props;

        const meta = {
            title: 'Часто задаваемые вопросы',
            description: 'ЖК Малахит Часто задаваемые вопросы'
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container>
                    <div className="header-1">Часто задаваемые вопросы</div>

                    <Spinner isLoaded={this.state.isLoaded}/>

                    <div className="pb-5">
                        {faq.length > 0 ? faq.map((item, id) =>
                            <CollapseBlock key={id} title={item.question} body={item.answer} doc={item.document} docName={item.document_name} />
                        ) : this.state.isLoaded ? <p className="text_18">Раздел находится в разработке</p>
                            : null}
                    </div>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

FaqPage.propTypes = {
    faq: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        faq: state.faq
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, faqActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(FaqPage);