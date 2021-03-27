import "../../../chassis.css";
import "./button.css";

export const Button = () => {
  return (
    <div className="wrapper">
      <div className="heading-2">Button</div>
      <div className="description">
        The button is a simple yet elegant clickable interface to let the user
        interact with it.
      </div>
      <div className="heading-3">Primary button</div>
      <div className="preview">
        <button className="btn-primary">Primary</button>
      </div>

      <div className="heading-3">Secondary button</div>
      <div className="preview">
        <button className="btn-secondary">Secondary</button>
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
      </div>

      <div className="heading-3">Floating action button</div>
      <div className="preview">
        <button className="btn-secondary">Show</button>
        <button className="btn-float">
          <div className="icon">
            <svg viewBox="0 0 24 24" style={{fill :"var(--color-1)"}}>
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
