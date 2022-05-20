import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const AdminPrivateRoute = ({
  component: Component,
  authAdmin: { isAdminAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAdminAuthenticated && !loading ? (
        <Redirect to="/loginAdmin" />
      ) : (
        <Fragment>
          <Component {...props} />
        </Fragment>
      )
    }
  />
);

AdminPrivateRoute.propTypes = {
  authAdmin: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  authAdmin: state.authAdmin,
});

export default connect(mapStateToProps)(AdminPrivateRoute);
