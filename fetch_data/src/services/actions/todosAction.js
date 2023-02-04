import {
  GET_TODOS_SUCCESS,
  GET_TODOS_REQUEST,
  GET_TODOS_FAILED,
  API_URL,
} from "../constants/todosConstant";
import axios from "axios";

const getAllTodos = () => async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST,
  });

  try {
    const res = await axios.get(API_URL);
    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TODOS_FAILED,
      error: error.message,
    });
  }
};

export default getAllTodos;
