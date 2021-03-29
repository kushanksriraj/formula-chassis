import { useState } from "react";
import "../../../chassis.css";
import "./button.css";
// import styles from "./button.module.css";

export const Button = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="wrapper">
      <div className="heading-2">Button</div>
      <div className="description">
        The button is a simple yet elegant clickable interface to let the user
        interact with it.
      </div>
      <div className="heading-3">Primary button</div>
      <div className="preview">
        <button className="btn font-md btn-primary">Primary</button>
        <button className="btn font-md btn-primary">Submit</button>
        <button className="btn font-md btn-primary">Clear</button>
      </div>

      <div className="heading-3">Secondary button</div>
      <div className="preview">
        <button className="btn font-md btn-secondary">Secondary</button>
        <button className="btn font-md btn-secondary">Checkout</button>
        <button className="btn font-md btn-secondary">Add to cart</button>
      </div>

      <div className="heading-3">Link button</div>
      <div className="preview">
        <button className="btn-link">Link</button>
        <button className="btn-link">Follow</button>
        <button className="btn-link">Install</button>
      </div>

      <div className="heading-3">Icon button</div>
      <div className="preview">
        <button className="btn-icon dark">
          <div className="icon">
            <svg style={{ fill: "rgb(31, 31, 39)" }} viewBox="0 0 24 24">
              <g>
                <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
              </g>
            </svg>
          </div>
        </button>
        <button className="btn-icon dark">
          <div className="icon">
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 450.391 450.391"
              style={{
                enableBackground: "new 0 0 450.391 450.391",
                fill: "var(--color-1)"
              }}
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
				c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
				c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
				C169.796,411.77,158.1,423.465,143.673,423.465z"
                    />
                    <path
                      d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
				C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
				c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"
                    />
                    <path
                      d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
				C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
				c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
				c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
				H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
				c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
				c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </button>
        <button className="btn-icon dark">
          <div className="icon">
            <svg viewBox="0 0 24 24" style={{ fill: "var(--color-1)" }}>
              <g>
                <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
              </g>
            </svg>
          </div>
        </button>
      </div>

      <div className="heading-3">Floating action button</div>
      <div className="preview">
        <button
          className="btn font-md btn-secondary"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "Hide" : "Show"}
        </button>
        <button
          className="btn-float"
          style={{ display: show ? "flex" : "none" }}
        >
          <div className="icon">
            <svg viewBox="0 0 24 24" style={{ fill: "var(--color-1)" }}>
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
          </div>
        </button>
      </div>

      <div className="code">{/* add code section */}</div>
    </div>
  );
};
