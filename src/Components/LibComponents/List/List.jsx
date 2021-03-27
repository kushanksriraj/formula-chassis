import "../../../chassis.css";
import "./list.css";

export const List = () => {
  return (
    <div className="wrapper">
      <div className="heading-2">List</div>
      <div className="description">
        The list can be used to show multiple related options or links.
      </div>

      <div className="heading-3">Spaced</div>
      <div className="preview">
        <ul className="list-spaced">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="heading-3">Stacked</div>
      <div className="preview">
        <ul className="list-stacked">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
