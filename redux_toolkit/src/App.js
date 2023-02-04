import "./App.css";
import CounterView from "./features/counter/counterView";
import PostView from "./features/posts/postView";

function App() {
  return (
    <div className="App">
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
