import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
            }

            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.object,
    children: PropTypes.node.isRequired,
};

export default withRouter(ScrollToTop);