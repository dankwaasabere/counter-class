import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";

function App() {
  return (
    <div class="Counter">
      <ClassCounter />
      <FunctionCounter />
    </div>
  );
}

export default App;
