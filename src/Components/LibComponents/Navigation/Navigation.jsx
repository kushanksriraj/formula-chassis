import "../../../chassis.css";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div className="wrapper">
      <div className="heading-2">Navigation</div>
      <div className="description">
        The navigation can be used in a nav bar.
      </div>

      <div className="heading-3">Desktop (Simple)</div>
      <div className="description">
        <div className="nav-desktop">
          <ul className="list-spaced nav-list">
            <li className="nav-item" style={{ margin: 0 }}>
              Home
            </li>
            <li className="nav-item" style={{ margin: 0 }}>
              About
            </li>
            <li className="nav-item" style={{ margin: 0 }}>
              More
            </li>
          </ul>
        </div>
      </div>
      <div className="heading-3">Submenus (TODO)</div>
      <div className="heading-3">Hamburger/Drawer (TODO)</div>
    </div>
  );
};
