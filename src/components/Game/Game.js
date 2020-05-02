import React, { useEffect } from "react";
import Bird from "../Bird/Bird";
import Foreground from "../Foreground/Foreground";
import Pipe from "../Pipe/Pipe";

import "./Game.css";
const Game = () => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 32) {
        fly();
      }
    };
    document.addEventListener("keypress", handleKeyPress);
  }, []);
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

export default Game;
