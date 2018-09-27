import React from 'react';
import PropTypes from 'prop-types';

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.isLoaded ? 'd-none spinner' : 'spinner'}>
                <div className="double-bounce1" />
                <div className="double-bounce2" />
            </div>
        )
    }
}


Spinner.propTypes = {
    isLoaded: PropTypes.bool.isRequired
};