import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addBus } from "../../actions/bus";
import PropTypes from "prop-types";
import NewBus from "../../components/bus/NewBus";

const AddBus = ({ addBus }) => {
  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    startTime: "",
    endTime: "",
    hoursTaken: "",
    seatPrice: "",
  });

  const { origin, destination, startTime, endTime, hoursTaken, seatPrice } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addBus({ origin, destination, startTime, endTime, hoursTaken, seatPrice });
    setFormData({
      origin: "",
      destination: "",
      startTime: "",
      endTime: "",
      hoursTaken: "",
      seatPrice: "",
    });
  };

  return (
    <Fragment>
      <NewBus onChange={onChange} onSubmit={onSubmit} formData={formData} />
    </Fragment>
  );
};

AddBus.propTypes = {
  addBus: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.authAdmin.isAuthenticated,
});

export default connect(mapStateToProps, { addBus })(AddBus);
