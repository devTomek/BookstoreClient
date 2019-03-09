import React from "react";
import "./Loader.scss";
import { Spinner } from "reactstrap";

const Loader = () => (
  <div className="app-loader-wrapper">
    <Spinner className="app-loader" type="grow" />
  </div>
);

export default Loader;
