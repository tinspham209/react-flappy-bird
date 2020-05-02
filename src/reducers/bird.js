const initialState = {
  y: 250,
  r: 0,
};

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case "FLY":
      return { ...state, y: state.y - 50, r: -20 };
    case "FALL":
      return { ...state, y: state.y + 30, r: 0 };

    default:
      return state;
  }
};
