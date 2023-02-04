import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByValue } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App By Redux-Toolkit</h1>
      <h4>Count - {count}</h4>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByValue(5))}>
        IncrementByFive
      </button>
    </div>
  );
};

export default CounterView;
