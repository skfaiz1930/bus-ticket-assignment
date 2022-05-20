import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LandingItem from "../../components/layout/LandingItem";

const Landing = ({ isUserAuthenticated, isAdminAuthenticated }) => {
  if (isUserAuthenticated) {
    return <Redirect to="/userDashboard" />;
  } else if (isAdminAuthenticated) {
    return <Redirect to="/adminDashboard" />;
  }

  return <LandingItem />;
};

Landing.propTypes = {
  isUserAuthenticated: PropTypes.bool,
  isAdminAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps)(Landing);
