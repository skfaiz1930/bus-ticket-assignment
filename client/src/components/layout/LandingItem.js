import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Fastify</h1>
          <p className="lead">Bus your Bus Ticket Online</p>
          <div className="buttons">
            <Link to="/registerUser" className="btn btn-custom">
              Sign Up
            </Link>
            <Link to="/loginUser" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
