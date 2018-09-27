import React from 'react';
import PropTypes from 'prop-types';

class PageLayout extends React.Component {
    render() {
        return (
            <main>
                <div className="header-line" />
                {this.props.children}
            </main>
        );
    }
}

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout;
