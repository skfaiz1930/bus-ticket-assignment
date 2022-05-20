import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSeat } from "../../actions/bus";
import { cancelTickets } from "../../actions/ticket";
import UserSeatMap from "../../components/bus/UserSeatMap";
import AdminSeatMap from "../../components/bus/AdminSeatMap";
const BusItem = ({
  date,
  bus,
  seats,
  setSeat,
  isUserAuthenticated,
  isAdminAuthenticated,
  cancelTickets,
  selectedSeat,
}) => {
  if (isUserAuthenticated && seats.length) {
    return (
      <Fragment>
        <UserSeatMap
          seats={seats}
          setSeat={setSeat}
          selectedSeat={selectedSeat}
        />
      </Fragment>
    );
  } else if (isAdminAuthenticated && seats.length) {
    return (
      <Fragment>
        <AdminSeatMap
          date={date}
          bus={bus}
          seats={seats}
          setSeat={setSeat}
          cancelTickets={cancelTickets}
          selectedSeat={selectedSeat}
        />
      </Fragment>
    );
  } else {
    return <h1></h1>;
  }
};
BusItem.propTypes = {
  selectedSeat: PropTypes.number.isRequired,
  seats: PropTypes.array.isRequired,
  bus: PropTypes.object.isRequired,
  setSeat: PropTypes.func.isRequired,
  cancelTickets: PropTypes.func.isRequired,
  isUserAuthenticated: PropTypes.bool.isRequired,
  isAdminAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  selectedSeat: state.bus.seat,
  date: state.bus.date,
  seats: state.bus.seats,
  bus: state.bus.bus,
  isUserAuthenticated: state.authUser.isUserAuthenticated,
  isAdminAuthenticated: state.authAdmin.isAdminAuthenticated,
});

export default connect(mapStateToProps, { setSeat, cancelTickets })(BusItem);
