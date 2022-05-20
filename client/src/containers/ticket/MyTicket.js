import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { myTickets, cancelTicket } from "../../actions/ticket";
import MyTickets from "../../components/ticket/MyTickets";
const MyTicket = ({ tickets, myTickets, cancelTicket }) => {
  useEffect(() => {
    myTickets();
  }, []);

  // console.log(tickets);

  if (tickets) {
    return (
      <Fragment>
        <MyTickets tickets={tickets} cancelTicket={cancelTicket} />
      </Fragment>
    );
  } else {
    return <h1></h1>;
  }
};

MyTicket.propTypes = {
  tickets: PropTypes.object.isRequired,
  myTickets: PropTypes.func.isRequired,
  cancelTicket: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.ticket.tickets,
});

export default connect(mapStateToProps, { myTickets, cancelTicket })(MyTicket);
