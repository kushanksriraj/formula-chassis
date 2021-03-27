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
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div className="heading-3">Stacked</div>
      <div className="preview">
        <ul className="list-stacked">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
};
