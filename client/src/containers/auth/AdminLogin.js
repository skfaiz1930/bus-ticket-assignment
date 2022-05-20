import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginAdmin } from "../../actions/auth";

import { Redirect } from "react-router-dom";
import Login from "../../components/auth/Login";
const AdminLogin = ({ loginAdmin, isAdminAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginAdmin(email, password);
  };
  if (isAdminAuthenticated) {
    return <Redirect to="/adminDashboard" />;
  }
  return (
    <Fragment>
      <Login
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
        user="Admin"
      />
    </Fragment>
  );
};

AdminLogin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  isAdminAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { loginAdmin })(AdminLogin);
