import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";

const UserPrivateRoute = ({
  component: Component,
  authUser: { isUserAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <Spinner />
      ) : isUserAuthenticated ? (
        <Fragment>
          <Component {...props} />
        </Fragment>
      ) : (
        <Fragment>
          <Redirect to="/loginUser" />
        </Fragment>
      )
    }
  />
);

UserPrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps)(UserPrivateRoute);
