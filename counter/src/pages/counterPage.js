import Counter from "../components/counter/counter";
import classes from "../asset/css/main.module.css";

const CounterPage = () => {
  return (
    <div className={classes.first}>
      <Counter />
    </div>
  );
};

export default CounterPage;
