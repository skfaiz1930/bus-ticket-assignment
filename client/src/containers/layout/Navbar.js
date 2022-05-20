import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import GuestNav from "../../components/layout/GuestNav";
import AdminNav from "../../components/layout/AdminNav";
import UserNav from "../../components/layout/UserNav";

const Navbar = ({ isUserAuthenticated, isAdminAuthenticated, logout }) => {
  return (
    <Fragment>
      {isAdminAuthenticated ? (
        <AdminNav logout={logout} />
      ) : isUserAuthenticated ? (
        <UserNav logout={logout} />
      ) : (
        <GuestNav />
      )}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
