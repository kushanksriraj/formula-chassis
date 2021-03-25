import "./chassis.css";
import "./styles.css";
import { Nav, Sidebar, Home, View } from "./Components";
import { useReducer, useState } from "react";
import { componentList } from "./componentList";

const switchComponentReducer = (state, action) => {
  switch (action.type) {
    case "SELECT":
      return [
        ...state.map((comp) =>
          comp.id === action.payload.id
            ? { ...comp, selected: true }
            : { ...comp, selected: false }
        )
      ];

    default:
      throw new Error();
  }
};

export default function App() {
  const [state, dispatch] = useReducer(switchComponentReducer, componentList);
  const [route, setRoute] = useState("home");

  return (
    <div className="App">
      <Nav />
      <Sidebar
        state={state}
        dispatch={dispatch}
        route={route}
        setRoute={setRoute}
      />
      {route === "home" && <Home />}
      {route === "view" && <View state={state} />}
    </div>
  );
}
