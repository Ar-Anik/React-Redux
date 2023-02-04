import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstant";

const initialState = {
  isLoading: false,
  todos: [],
  error: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: "",
      };
    case GET_TODOS_FAILED:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
