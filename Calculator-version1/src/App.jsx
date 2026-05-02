import Style from "./App.module.css";
import Display from "./components.jsx/display.jsx";
import Button from "./components.jsx/Button.jsx";
function App() {
  return (
    <div className={Style.container}>
      <Display></Display>
      <Button></Button>
    </div>
  );
}
export default App;
