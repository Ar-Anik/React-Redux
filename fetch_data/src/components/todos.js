import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getAllTodos from "../services/actions/todosAction";
import "../App.css";

const Todos = () => {
  const { isLaoding, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  //   console.log(valueOf(<h1>Aniik</h1>));
  //   console.log("OUT");

  useEffect(() => {
    dispatch(getAllTodos());
    // console.log("IN");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLaoding && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      <section>
        {todos &&
          todos.map((todo) => {
            const { id, title } = todo;
            return (
              <div className="rong" key={id}>
                <h4>{id}</h4>
                <h4>{title}</h4>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Todos;
