import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../actions/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decreemnt</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </>
  );
};

export default Counter;
