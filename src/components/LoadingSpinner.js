import React from "react";
import { Spin } from "antd";

import "./LoadingSpinner.css";

function LoadingSpinner() {
  return <Spin className="LoadingSpinner" size="large" tip="Loading..." />;
}

export default LoadingSpinner;
