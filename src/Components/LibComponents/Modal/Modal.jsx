import { useState } from "react";
import "../../../chassis.css";
import "./modal.css";

export const Modal = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="wrapper">
      <div className="heading-2">Modal(TODO)</div>
      <div className="description">
        A modal is a popup that is used to grab user's attention.
      </div>
      
      <div className="preview">
      <button className="btn font-md btn-primary" onClick={() => setShow(true)}>
        Show
      </button>
      </div>

      <div className="modal-bg" style={{display : show ? "flex" : "none"}}>
        <div className="modal">
          <h2>Here! Need your attention!</h2>
          <button className="btn font-md btn-secondary" 
          onClick={() => setShow(false)}>
            X
          </button>
        </div>
      </div>

    </div>
  );
};
