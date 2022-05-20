import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { registerAdmin } from "../../actions/auth";
import PropTypes from "prop-types";
import Register from "../../components/auth/Register";
import { setAlert } from "../../actions/alert";
import { Redirect } from "react-router-dom";
const AdminRegister = ({ setAlert, registerAdmin, isAdminAuthenticated }) => {
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
      registerAdmin({ name, email, password });
    }
  };
  if (isAdminAuthenticated) {
    return <Redirect to="/adminDashboard" />;
  }
  return (
    <Fragment>
      <div className="">
        <Register
          onChange={onChange}
          onSubmit={onSubmit}
          formData={formData}
          user="Admin"
        />
      </div>
    </Fragment>
  );
};

AdminRegister.propTypes = {
  registerAdmin: PropTypes.func.isRequired,
  isAdminAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { registerAdmin, setAlert })(
  AdminRegister
);
