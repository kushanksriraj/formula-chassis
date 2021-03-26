import "../../chassis.css";
import "./sidebar.css";
import { useEffect, useRef } from "react";

export const Sidebar = ({
  state,
  dispatch,
  setRoute,
  route,
  slider,
  setSlider
}) => {
  const hRef = useRef(null);

  const onClickHandler = (id) => {
    setSlider(false);
    setRoute("view");
    dispatch({
      type: "SELECT",
      payload: {
        id: id
      }
    });
  };

  useEffect(() => {
    if (slider) {
      // hRef.current.style.maxWidth = "400px";
      hRef.current.style.width = "80%";
    } else {
      hRef.current.style.width = "";
    }
  }, [hRef, slider]);

  return (
    <aside ref={hRef}>
      <div
        className={route === "home" ? "heading selected" : "heading"}
        onClick={() => setRoute("home")}
      >
        <button className="btn-link no-border" onClick={() => setSlider(false)}>
          Getting started
        </button>
      </div>
      <ul className="list__stacked">
        {state.map(({ id, name, selected }) => {
          return (
            <li
              key={id}
              className={selected && route === "view" ? "selected" : null}
              onClick={() => onClickHandler(id)}
            >
              <button className="btn-link">{name}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
