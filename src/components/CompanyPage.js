import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as documentActions from '../actions/Document';
import { Container, Row, Col } from 'reactstrap';
import DocumentMeta from 'react-document-meta';

import Advantages from '../components/common/Advantages';
import CompanyImg from "../images/about/yk_foto.jpg";
import CompanyHeadImg from "../images/about/yk_foto-2.jpg";

import Spinner from "./common/Spinner";

class CompanyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false
        };
        this.toggleSpinner = this.toggleSpinner.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadDocuments().then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearDocuments();
    }

    toggleSpinner() {
        this.setState({isLoaded: true});
    }

    render() {
        const {documents} = this.props;

        const meta = {
            title: 'Управляющая компания',
            description: 'ЖК Малахит Управляющая компания'
        };

        return (
            <div>
                <DocumentMeta {...meta} />

                <Container className="pb-5">
                    <div className="header-1">ЖЭК Малахит</div>
                    <Row className="pb-4">
                        <Col lg="5" md="12" xs="12"><img src={CompanyHeadImg} className="img-fluid mb-5 mb-lg-0" alt="company image" /></Col>
                        <Col lg="7" md="12" xs="12">
                            <p className="text_18">Уважаемые жильцы ЖК «Малахит»!</p>
                            <p className="text_18">ЖЭК «Малахит» создана и работает на территории ЖК «Малахит» для того, чтобы сохранить
                                пространство жилого комплекса уютным, красивым и комфортным и поддерживать достойный уровень качества жизни в жилом квартале.
                                <br/>На этой страничке размещена и будет добавляться вся необходимая вам информация по обслуживанию и благоустройству
                                    вашего жилья и прилегающей территории.
                                    <br/>Здесь вы сможете узнавать все новости жилого комплекса, задать вопросы на волнующие вас темы, найдете важную
                                информацию о тарифах и услугах, правилах проживания в ЖК «Малахит».
                            </p>
                        </Col>
                    </Row>
                    <Row className="pb-5">
                        <Col lg="5" md="12" xs="12" className="text-right"><img src={CompanyImg} className="img-fluid mb-5 mb-lg-0" alt="company image" /></Col>
                        <Col lg="7" md="12" xs="12">
                            <p className="text_18">
                                Директор ООО  «ЖЭК Малахит»<br/>
                                Кинев Андрей Николаевич<br/>
                                Тел. +7 9139278382
                            </p>
                        </Col>
                    </Row>

                    <div className="header-1 pt-0">Документы</div>

                    <Row className="pb-3">
                        <Spinner isLoaded={this.state.isLoaded}/>

                        <Col className={this.state.isLoaded ? "d-block" : "d-none"}>
                            <Row>
                                {documents.map((item, i) =>
                                    <Col key={i} lg="6" md="6" sm="12" xs="12">
                                        <a href={item.document} target="_blank" className="docs__link docs__link_small" rel="noopener noreferrer" download>
                                            <span>{item.name}</span>
                                        </a>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Advantages/>
            </div>
        );
    }
}

CompanyPage.propTypes = {
    documents: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        documents: state.documents
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, documentActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanyPage);