import "../../../chassis.css";
import "./text-util.css";

export const TextUtil = () => {
  return (
    <div className="wrapper">
      <div className="heading-2">Text utilities</div>
      <div className="description">Reusable text utilities.</div>

      <div className="heading-3">Headings</div>
      <div className="preview">
        <div className="heading-1">This is heading 1.</div>
        <div className="heading-2">This is heading 2.</div>
        <div className="heading-3">This is heading 3.</div>
      </div>

      <div className="heading-3">Small text</div>
      <div className="preview">
        <span className="txt-small">This text goes small.</span>
      </div>

      <div className="heading-3">Grey text</div>
      <div className="preview">
        <span className="txt-grey">This text is grey.</span>
      </div>

      <div className="heading-3">Center text</div>
      <div className="preview">
        <div className="txt-center">This text is in center.</div>
      </div>
    </div>
  );
};
