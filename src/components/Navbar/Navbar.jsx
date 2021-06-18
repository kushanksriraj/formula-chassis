import styles from "./Navbar.module.css";

export const Navbar = ({ setShowSideBar }) => {
  return (
    <div className={styles.container}>
      <div
        id="logo"
        className={styles.logo}
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        LOGO
      </div>
    </div>
  );
};
