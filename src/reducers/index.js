import { combineReducers } from "redux";
import Game from "./game";
import Bird from "./bird";
import Pipe from "./pipe";
export default combineReducers({
  Game,
  Bird,
  Pipe,
});
