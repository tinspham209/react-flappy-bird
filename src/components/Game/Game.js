import React, { useEffect } from "react";
import Bird from "../Bird/Bird";
import Foreground from "../Foreground/Foreground";
import Pipe from "../Pipe/Pipe";
import { connect } from "react-redux";

import "./Game.css";
const Game = ({ status, start, fly }) => {
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
  return (dispatch) => {
    dispatch({ type: "FLY" });
  };
};

const start = () => {
  return (dispatch, getState) => {
    const { status } = getState().Game;
    if (status !== "playing") {
      setInterval(() => {
        dispatch({ type: "FALL" });
      }, 200);
      dispatch({ type: "START" });
    }
  };
};

const mapStateToProps = ({ Game }) => {
  return {
    status: Game.status,
  };
};
const mapDispatchToProps = { start, fly };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
