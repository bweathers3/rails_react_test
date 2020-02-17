import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

export default (props) => (
  <div className="vw-100 vh-25 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Welcome to the Church Bulletin App</h1>
        <p className="lead align-items-center">
          This app is designed to keep you up to date with events in your church.
        </p>
        <p className="lead"></p>
        <p className="lead">
          In addition this app gives you an enviorment to take notes during worship time.
        </p>
        <hr className="my-4" />
        <Link
          to="/churchhomepage"
          className="btn btn-lg btn-dark"
          role="button"
        >
          <i class="fas fa-home"></i> Church Home Page
        </Link>

      </div>
      <Button color="danger">Danger!</Button>
    </div>
  </div>
);
