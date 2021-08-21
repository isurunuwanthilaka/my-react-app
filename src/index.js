import React from "react";
import ReactDom from "react-dom";

const Greating = () => {
  return <h1>This is the first component!</h1>;
};

ReactDom.render(<Greating />, document.getElementById("root"));
