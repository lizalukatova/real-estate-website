import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

export default class CollapseBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapse: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => ({
            collapse: !prevState.collapse
        }));
    }

    render() {
        const {title, body, doc, docName} = this.props;
        const {collapse} = this.state;

        return (
            <div className={collapse ? "apartment__button-collapse show" : "apartment__button-collapse"} onClick={this.toggle}>
                {ReactHtmlParser (title)}
                <Collapse isOpen={collapse} className="apartment__collapse">
                    {ReactHtmlParser(body)}
                    {doc ? <a href={doc} target="_blank" className="docs__link docs__link_small" rel="noopener noreferrer">
                        <span>{docName}</span></a> : null}
                </Collapse>
            </div>
        );
    }
}

CollapseBlock.propTypes = {
    title: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    body: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    doc: PropTypes.string,
    docName: PropTypes.string,
};
