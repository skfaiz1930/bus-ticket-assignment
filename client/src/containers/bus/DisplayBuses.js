import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import BusItem from "./BusItem";
import BusPage from "../../components/bus/BusPage";
import AdminBusPage from "../../components/bus/AdminBusPage";
const DisplayBuses = ({
  bus,
  date,
  isUserAuthenticated,
  isAdminAuthenticated,
}) => {
  if (isUserAuthenticated) {
    return (
      <Fragment>
        <BusPage bus={bus} date={date} BusItem={BusItem} />
      </Fragment>
    );
  } else if (isAdminAuthenticated) {
    return (
      <Fragment>
        <AdminBusPage bus={bus} date={date} BusItem={BusItem} />
      </Fragment>
    );
  }
};

DisplayBuses.propTypes = {
  bus: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired,
};

DisplayBuses.propTypes = {
  buses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
  bus: state.bus,
  date: state.bus.date,
});

export default connect(mapStateToProps, {})(DisplayBuses);
