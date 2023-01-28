import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/state/Counter/counterSlice";
import classes from "../../asset/css/main.module.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.main}>
      React-Redux Counter App
      <div>
        <h4>{count}</h4>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        &nbsp; &nbsp;
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
