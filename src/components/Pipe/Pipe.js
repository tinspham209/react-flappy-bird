import React from "react";
import { connect } from "react-redux";

import "./Pipe.css";
const Pipe = ({ x, pipes }) => {
  return (
    <div className="Pipe">
      {pipes.map(({ topHeight }, i) => (
        <div key={`pipe-${i}`} style={{ position: "relative" }}>
          <div
            className="Pipe-top"
            style={{
              left: x + i * 200,
              height: topHeight,
              transition: "left 200ms",
            }}
          ></div>
          <div
            className="Pipe-bottom"
            style={{
              left: x + i * 200,
              top: topHeight + 100,
              transition: "left 200ms",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({ Pipe }) => {
  return {
    x: Pipe.x,
    pipes: Pipe.pipes,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Pipe);
