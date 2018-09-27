import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as houseDocActions from '../../actions/HouseDoc';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Spinner from "../common/Spinner";

class DocsTabs extends React.Component {
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
        this.props.actions.loadHouseDocs().then(this.toggleSpinner);
    }

    componentWillUnmount() {
        this.props.actions.clearHouseDocs();
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
        const {houseDocs} = this.props;

        return (
            <div>
                <Spinner isLoaded={this.state.isLoaded}/>

                <Row className={this.state.isLoaded ? "margin-b-60" : "d-none"}>
                    <Col md="3" sm="12" xs="12">
                        <Nav tabs className="docs-tabs">
                            {Object.keys(houseDocs).map((key, i) => {
                                const tabNum = i + 1;

                                return <NavItem key={i}>
                                    <NavLink className={classnames({active: this.state.activeTab === tabNum})} onClick={() => {this.toggle(tabNum);}}>
                                        Дом №{key}
                                    </NavLink>
                                </NavItem>
                            })}
                        </Nav>
                    </Col>
                    <Col md="1" className="d-none d-md-block">
                        <div className="docs-line" />
                    </Col>
                    <Col md="8" sm="12" xs="12">
                        <TabContent activeTab={this.state.activeTab}>
                            {Object.keys(houseDocs).map((key, i) => {
                                const tabNum = i + 1;
                                const docs = houseDocs[key];

                                return <TabPane key={i} tabId={tabNum}>
                                        {docs.map((item, i) =>
                                            <Row key={i}>
                                                <Col xs="9">
                                                    <a href={item.document} target="_blank" className="docs__link docs__link_small" rel="noopener noreferrer" download>
                                                        <span>{item.name}</span>
                                                    </a>
                                                </Col>
                                                <Col xs="3" className="d-flex align-items-center">
                                                    <p className="docs__date">{item.date}</p>
                                                </Col>
                                            </Row>
                                        )}
                                    </TabPane>
                            })}
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}

DocsTabs.propTypes = {
    houseDocs: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    actions: PropTypes.object
};

function mapStateToProps(state) {
    return {
        houseDocs: state.houseDocs
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, houseDocActions), dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(DocsTabs);