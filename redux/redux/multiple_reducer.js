const { createStore, combineReducers } = require("redux");

const ADD_PRODUCT = "ADD PRODUCT";
const GET_PRODUCT = "GET PRODUCT";

const ADD_INTO_CARD = "ADD INTO CARD";
const GET_CARD_PRODUCT = "GET CARD PRODUCT";

// state
const initialStateProduct = {
  product: ["Alu", "Banana"],
  count: 2,
};

const initialStateCardProduct = {
  product: ["Rice"],
  count: 1,
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

const addCardProduct = (product) => {
  return {
    type: ADD_INTO_CARD,
    payload: product,
  };
};

const getCardProduct = () => {
  return {
    type: GET_CARD_PRODUCT,
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

const cardReducer = (state = initialStateCardProduct, action) => {
  switch (action.type) {
    case ADD_INTO_CARD:
      return {
        product: [...state.product, action.payload],
        count: state.count + 1,
      };
    case GET_CARD_PRODUCT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  productR: productReducer,
  cardR: cardReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("salt"));
store.dispatch(getProduct());

store.dispatch(addCardProduct("sugar"));
store.dispatch(getCardProduct());
