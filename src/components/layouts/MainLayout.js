import React from 'react';
import PropTypes from 'prop-types';

class MainLayout extends React.Component {
    render() {
        return this.props.children;
    }
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;


