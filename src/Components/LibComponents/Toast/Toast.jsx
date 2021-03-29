import { useState } from "react";
import "../../../chassis.css";
import "./toast.css";

export const Toast = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="wrapper">
      <div className="heading-2">Toast</div>
      <div className="description">
        Toast message or snackbar is used to give some feedback to the user.
      </div>

      <button class="btn font-md btn-primary" onClick={() => setShow(true)}>
        Show
      </button>

      <div class="toast" style={{ display: show ? "flex" : "none" }}>
        You've got a message!
        <button class="btn-hide-toast" onClick={() => setShow(false)}>
          X
        </button>
      </div>
    </div>
  );
};
