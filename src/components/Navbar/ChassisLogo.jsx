import styles from "./Navbar.module.css";
import { useRef, useEffect } from "react";
import { Logo } from "../../common/Logo";

export const ChassisLogo = ({ showSideBar }) => {
  const transRef = useRef(null);
  useEffect(() => {
    if (showSideBar) {
      transRef.current.style.transform = "rotate(90deg)";
    } else {
      transRef.current.style.transform = "none";
    }
  }, [transRef, showSideBar]);

  return (
    <div
      id="logo-container"
      ref={transRef}
      className={showSideBar ? styles.logo__animate : styles.logo}
    >
      <Logo />
    </div>
  );
};
