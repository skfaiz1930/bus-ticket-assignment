import { React, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import UserPrivateRoute from "./containers/routing/UserPrivateRoute";
import AdminPrivateRoute from "./containers/routing/AdminPrivateRoute";
import CommonPrivateRoute from "./containers/routing/CommonPrivateRoute";
import { loadAdmin, loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import AdminRegister from "./containers/auth/AdminRegister";
import UserRegister from "./containers/auth/UserRegister";
import UserLogin from "./containers/auth/UserLogin";
import AdminLogin from "./containers/auth/AdminLogin";
import UserDashboard from "./containers/dashboard/UserDashboard";
import AdminDashboard from "./containers/dashboard/AdminDashboard";
import GetBuses from "./containers/bus/GetBuses";
import DisplayBuses from "./containers/bus/DisplayBuses";
import MyTicket from "./containers/ticket/MyTicket";
import Book from "./containers/ticket/Book";
import MyBuses from "./containers/bus/MyBuses";
import UserInfo from "./containers/ticket/UserInfo";
import Landing from "./containers/layout/Landing";
import Navbar from "./containers/layout/Navbar";
import AddBus from "./containers/bus/AddBus";
import EditBus from "./containers/bus/EditBus";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  useEffect(() => {
    store.dispatch(loadAdmin());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <section className="">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <UserPrivateRoute
                exact
                path="/userDashboard"
                component={UserDashboard}
              />
              <UserPrivateRoute exact path="/findBuses" component={GetBuses} />
              <UserPrivateRoute exact path="/book" component={Book} />
              <UserPrivateRoute exact path="/myTickets" component={MyTicket} />
              <CommonPrivateRoute
                exact
                path="/queryResults"
                component={DisplayBuses}
              />

              <AdminPrivateRoute exact path="/myBuses" component={MyBuses} />
              <AdminPrivateRoute
                exact
                path="/adminDashboard"
                component={AdminDashboard}
              />
              <AdminPrivateRoute
                exact
                path="/ticketInfo"
                component={UserInfo}
              />
              <AdminPrivateRoute exact path="/addBus" component={AddBus} />
              <AdminPrivateRoute exact path="/editBus/:id" component={EditBus} />
              <Route exact path="/registerAdmin" component={AdminRegister} />
              <Route exact path="/loginAdmin" component={AdminLogin} />

              <Route exact path="/registerUser" component={UserRegister} />
              <Route exact path="/loginUser" component={UserLogin} />
            </Switch>
          </section>
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
