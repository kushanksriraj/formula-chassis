import "../../../chassis.css";
import "./image.css";

export const Image = () => {
  return (
    <div className="wrapper">
      <div className="heading-2">Image</div>
      <div className="description">
        An image is the primary focus for a website and it should be responsive.
      </div>
      <div className="heading-3">Responsive</div>
      <div className="preview">
        <div className="img-container">
          <img
            src="https://picsum.photos/300/200"
            alt="img-responsive"
            className="img-responsive"
          />
        </div>
      </div>
      <div className="heading-3">Round image</div>
      <div className="preview">
        <div className="img-container">
          <img
            src="https://picsum.photos/300/200"
            alt="img-round"
            className="img-responsive img-round"
          />
        </div>
      </div>
    </div>
  );
};
