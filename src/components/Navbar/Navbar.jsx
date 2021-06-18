import styles from "./Navbar.module.css";

export const Navbar = ({ setShowSideBar }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.logo}
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        LOGO
      </div>
    </div>
  );
};
