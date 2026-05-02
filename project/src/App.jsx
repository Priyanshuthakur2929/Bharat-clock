import Appname from "./components/Appname";
import "./components/App.css";
import todo1 from "./components/todo1";
import todo2 from "./components/todo2";
import todo3 from "./components/todo3";

function App() {
  return (
    <div className="Todo-container">
      <Appname ></Appname>
      <div className="container text">
        <div className="todo container">
        <todo1></todo1>
        <todo2></todo2>
        <todo3></todo3>
        </div>
      </div>
    </div>
  );
}
export default App;
