import React from "react";
import { connect } from "react-redux";

import "./Bird.css";
const Bird = ({ y, r }) => {
  return (
    <div
      className="Bird"
      style={{
        top: y,
        transform: `rotate(${r}deg)`,
        transition: "transform 200ms, top 200ms",
      }}
    ></div>
  );
};

const mapStateToProps = ({ Bird }) => ({ y: Bird.y, r: Bird.r });
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
