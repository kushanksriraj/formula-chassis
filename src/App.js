import "./chassis.css";
import "./styles.css";
import { Nav, Sidebar, Home, View } from "./Components";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Home />
      {/* <View /> */}
    </div>
  );
}
