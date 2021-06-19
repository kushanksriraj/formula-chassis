import styles from "./Navbar.module.css";
import { ChassisLogo } from "./ChassisLogo";
import { useEffect } from "react";
import { GitHubLogoSVG } from "./GitHubLogoSVG";
import { TwitterLogoSVG } from "./TwitterLogoSVG";
import { LinkedInLogoSVG } from "./LinkedInLogoSVG";

export const Navbar = ({ setShowSideBar, showSideBar }) => {
  useEffect(() => {
    setShowSideBar(true);
    setTimeout(() => setShowSideBar(false), 1000);
  }, []);

  return (
    <div className={`${styles.container} bg-color-1`}>
      <div className="flex align-center">
        <div
          id="logo"
          className={styles.logo}
          onClick={() => setShowSideBar((prev) => !prev)}
        >
          <ChassisLogo showSideBar={showSideBar} />
        </div>
        <header className="color-2 heading-2 m-h-2">Chassis</header>
      </div>
      <div className="flex m-h-2 space-around align-center p-2">
        <div
          className="p-h-2 flex align-center cur-point"
          onClick={() =>
            window.open(
              "https://github.com/kushanksriraj/formula-chassis",
              "_blank"
            )
          }
        >
          <GitHubLogoSVG />
        </div>
        <div
          className="p-h-2 flex align-center cur-point"
          onClick={() =>
            window.open("https://twitter.com/KushankSriraj", "_blank")
          }
        >
          <TwitterLogoSVG />
        </div>
        <div
          className="p-h-2 flex align-center cur-point"
          onClick={() =>
            window.open("https://www.linkedin.com/in/kushank-sriraj/", "_blank")
          }
        >
          <LinkedInLogoSVG />
        </div>
      </div>
    </div>
  );
};
