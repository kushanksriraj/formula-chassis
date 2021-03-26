import "../../../chassis.css";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div className="wrapper">
      <div className="heading__2">Navigation</div>
      <div className="description">
        The navigation can be used in a nav bar.
      </div>

      <div className="heading__3">Desktop (Simple)</div>
      <div className="preview">
        <div className="nav__desktop">
          <ul className="list__spaced nav__list">
            <li className="nav__item">HOME</li>
            <li className="nav__item">ABOUT</li>
            <li className="nav__item">MORE</li>
          </ul>
        </div>
      </div>

      <div className="heading__3">Submenus (TODO)</div>
      <div className="heading__3">Hamburger/Drawer (TODO)</div>
    </div>
  );
};
