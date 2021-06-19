import styles from "./Navbar.module.css";
import { ChassisLogo } from "./ChassisLogo";
import { useEffect } from "react";

export const Navbar = ({ setShowSideBar, showSideBar }) => {
  useEffect(() => {
    setShowSideBar(true);
    setTimeout(() => setShowSideBar(false), 1000);
  }, []);

  return (
    <div className={`${styles.container} bg-color-1`}>
      <div
        id="logo"
        className={styles.logo}
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        <ChassisLogo showSideBar={showSideBar} />
      </div>
      <header className="color-2 heading-2 m-h-2">Chassis</header>
    </div>
  );
};
