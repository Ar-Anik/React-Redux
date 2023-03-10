const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// state
const initialState = {
  count: 0,
};

// action
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

// getState(), dispatch(), subscribe()

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
