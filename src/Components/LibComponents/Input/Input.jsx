import "../../../chassis.css";
import "./input.css";

export const Input = () => {
  return (
    <div className="wrapper">
      <div className="heading-2">Input</div>
      <div className="description">
        The input component allows the user to type and submit some text.
      </div>
      <div className="heading-3">Textbox</div>
      <div className="preview">
        <textarea placeholder="Enter some text" className="textbox"></textarea>
      </div>
      <div className="heading-3">Validation and errors styled (TODO)</div>
    </div>
  );
};
