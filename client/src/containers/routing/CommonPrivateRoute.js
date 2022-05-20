import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const CommonPrivateRoute = ({
  component: Component,
  authAdmin: { isAdminAuthenticated, loading },
  authUser: { isUserAuthenticated },
  loadingUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      (!isUserAuthenticated || !isAdminAuthenticated) &&
      (!loading || !loadingUser) ? (
        <Fragment>
          <Component {...props} />
        </Fragment>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

CommonPrivateRoute.propTypes = {
  authAdmin: PropTypes.object.isRequired,
  authUser: PropTypes.object.isRequired,
  loadingUser: PropTypes.bool.isRequired,
};
const mapStateToProps = (state) => ({
  authAdmin: state.authAdmin,
  authUser: state.authUser,
  loadingUser: state.authUser.loading,
});

export default connect(mapStateToProps)(CommonPrivateRoute);
