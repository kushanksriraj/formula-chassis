import "../../chassis.css";
import "./view.css";

export const View = ({state}) => {
  return (
    <main>
      {
        state.filter(comp => comp.selected)[0].component()
      }
    </main>
  );
};
