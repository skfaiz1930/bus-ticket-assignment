import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { registerUser } from "../../actions/auth";
import PropTypes from "prop-types";
import Register from "../../components/auth/Register";

import { Redirect } from "react-router-dom";
const UserRegister = ({ setAlert, registerUser, isUserAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      registerUser({ name, email, password });
    }
  };

  if (isUserAuthenticated) {
    return <Redirect to="/userDashboard" />;
  }
  return (
    <Fragment>
      <div className="">
        <Register
          onChange={onChange}
          onSubmit={onSubmit}
          formData={formData}
          user="User"
        />
      </div>
    </Fragment>
  );
};

UserRegister.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerUser })(
  UserRegister
);
