import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/auth";
import Login from "../../components/auth/Login";

import { Redirect } from "react-router-dom";
const UserLogin = ({ loginUser, isUserAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };
  if (isUserAuthenticated) {
    return <Redirect to="/userDashboard" />;
  }
  return (
    <Fragment>
      <Login
        isUserAuthenticated={isUserAuthenticated}
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
        user="User"
      />
    </Fragment>
  );
};

UserLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(UserLogin);
