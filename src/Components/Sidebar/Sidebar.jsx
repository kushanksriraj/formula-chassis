import "../../chassis.css";
import "./sidebar.css";

export const Sidebar = ({ state, dispatch, setRoute, route }) => {
  const onClickHandler = (id) => {
    setRoute("view");
    dispatch({
      type: "SELECT",
      payload: {
        id: id
      }
    });
  };

  return (
    <aside>
      <div
        className={route === "home" ? "heading selected" : "heading"}
        onClick={() => setRoute("home")}
      >
        Getting started
      </div>
      <ul className="list__stacked">
        {state.map(({ id, name, selected }) => {
          return (
            <li
              key={id}
              className={selected && route === "view" ? "selected" : null}
              onClick={() => onClickHandler(id)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
