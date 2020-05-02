export default (state = {}, { type } = {}) => {
  switch (type) {
    case "START":
      return { ...state, status: "playing" };
    default:
      return state;
  }
};
