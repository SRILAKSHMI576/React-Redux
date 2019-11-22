const initialState = {
  counter: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "Decrement":
      return { ...state, counter: state.counter - 1 };
    case "DISPATCH":
      return { ...state, name: "laxmi" };
    default:
      return state;
  }
}

export default rootReducer;
