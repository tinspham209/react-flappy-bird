import React from "react";
import Bird from "../Bird/Bird";
import Foreground from "../Foreground/Foreground";
import Pipe from "../Pipe/Pipe";

import "./Game.css";
const Game = () => {
  return (
    <div className="Game">
      <Bird />
      <Pipe />
      <Foreground />
    </div>
  );
};

export default Game;
