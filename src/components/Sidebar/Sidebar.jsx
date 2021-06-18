import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";

export const Sidebar = ({ setShowSideBar, showSideBar }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setShowSideBar(false));

  return (
    <div
      ref={ref}
      className={`${styles.container} box-shadow`}
      style={{
        width: showSideBar ? "80%" : "",
      }}
    >
      <ul className={`${styles.ul} list`}>
        <NavLink
          className={styles.side}
          to="/avatar"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          AVATAR
        </NavLink>

        <NavLink
          className={styles.side}
          to="/badge"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          BADGE
        </NavLink>

        <NavLink
          className={styles.side}
          to="/banners"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          BANNERS
        </NavLink>

        <NavLink
          className={styles.side}
          to="/button"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          BUTTON
        </NavLink>

        <NavLink
          className={styles.side}
          to="/cards"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          CARDS
        </NavLink>

        <NavLink
          className={styles.side}
          to="/input"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          INPUT
        </NavLink>

        <NavLink
          className={styles.side}
          to="/list"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          LIST
        </NavLink>

        <NavLink
          className={styles.side}
          to="/modal"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          MODAL
        </NavLink>

        <NavLink
          className={styles.side}
          to="/navigation"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          NAVIGATION
        </NavLink>

        <NavLink
          className={styles.side}
          to="/text-utils"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          TEXT UTILS
        </NavLink>

        <NavLink
          className={styles.side}
          to="/toast"
          activeClassName={styles.link__active}
          onClick={() => setShowSideBar(false)}
        >
          TOAST
        </NavLink>
      </ul>
    </div>
  );
};
