const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const ADD_PRODUCT = "ADD PRODUCT";
const GET_PRODUCT = "GET PRODUCT";

// state
const initialStateProduct = {
  product: ["Alu", "Banana"],
  count: 2,
};

// action
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};

// reducer
const productReducer = (state = initialStateProduct, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        product: [...state.product, action.payload],
        count: state.count + 1,
      };
    case GET_PRODUCT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

// store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProduct());
store.dispatch(addProduct("Rice"));
store.dispatch(addProduct("Biscut"));
