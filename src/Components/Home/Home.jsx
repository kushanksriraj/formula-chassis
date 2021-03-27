import "../../chassis.css";
import "./home.css";

export const Home = () => {
  return (
    <main>
      <div className="wrapper">
        <div className="heading-2">
          Chassis
          <div className="txt-small">A UI library of FORMULA</div>
        </div>

        <div className="description">
          Chassis lets you build webapps faster by providing reusable
          components.
        </div>

        <div className="description">
        To quickly get started,
          place the following code in the {"<head>"} tag of your page.
        </div>
        <div className="nudge-left">
          <code>
            {`<link rel="stylesheet" href="https://chassis.netlify.app/chassis.css" />`}
          </code>
        </div>

        <div className="description">Happy Building!</div>
      </div>
    </main>
  );
};
