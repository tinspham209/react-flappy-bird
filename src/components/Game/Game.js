import React, { useEffect } from "react";
import Bird from "../Bird/Bird";
import Foreground from "../Foreground/Foreground";
import Pipe from "../Pipe/Pipe";
import { connect } from "react-redux";

import "./Game.css";
const Game = ({ status }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 32) {
        fly();
      }
      if (status !== "playing") {
        start();
      }
    };
    document.addEventListener("keypress", handleKeyPress);
  }, []);

  console.log("status", status);

  return (
    <div className="Game">
      <Bird />
      <Pipe />
      <Foreground />
    </div>
  );
};

const fly = () => {
  console.log("fly");
};

const start = () => {
  return (dispatch) => {
    dispatch({ type: "START" });
  };
};

const mapStateToProps = (state) => {
  return {
    status: state.status,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
