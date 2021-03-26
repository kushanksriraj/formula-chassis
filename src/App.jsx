import "./chassis.css";
import "./styles.css";
import { Nav, Sidebar, Home, View } from "./Components";
import { useEffect, useReducer, useState } from "react";
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
  const [slider, setSlider] = useState(false);

  useEffect(() => {
   setTimeout(()=> setSlider(true), 1000);
   setTimeout(()=> setSlider(false), 2500);
  }, []);

  return (
    <div className="App">
      <Nav slider={slider} setSlider={setSlider} />
      <Sidebar
        slider={slider}
        setSlider={setSlider}
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
