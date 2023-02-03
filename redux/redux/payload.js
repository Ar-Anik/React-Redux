const { createStore } = require("redux");

const ADD_USER = "ADD USER";

// state
const initialState = {
  user: ["anik"],
  count: 1,
};

// action
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      return state;
  }
};

// store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("shawon"));
store.dispatch(addUser("mizan"));
