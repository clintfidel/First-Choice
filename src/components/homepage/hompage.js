import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Homepage = () => {
  return (
    <Fragment>
      <div className="homepage">
        <button>
          <Link to="/product-category/">Click me to choose a category</Link>
        </button>
      </div>
    </Fragment>
  );
};

export default Homepage;
