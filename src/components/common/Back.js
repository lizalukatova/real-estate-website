import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
    <a onClick={history.goBack} className="go-back">Вернуться</a>
);

Back.propTypes = {
    history: PropTypes.object,
};

export default withRouter(Back);
