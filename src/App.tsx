import { VisibleDemo } from "./demos/VisibleDemo";
import { AsyncDemo } from "./demos/AsyncDemo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <VisibleDemo />
      <AsyncDemo />
    </div>
  );
}
