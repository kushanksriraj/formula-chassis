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
            src="https://rukminim1.flixcart.com/image/416/416/kjuby4w0/television/x/q/y/oled65gxpta-lg-original-imafzbfxnutpvmxw.jpeg?q=70"
            alt=""
            className="img-responsive"
          />
        </div>
      </div>
      <div className="heading-3">Round image</div>
      <div className="preview">
        <div className="img-container">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/kjuby4w0/television/x/q/y/oled65gxpta-lg-original-imafzbfxnutpvmxw.jpeg?q=70"
            alt=""
            className="img-responsive img-round"
          />
        </div>
      </div>
    </div>
  );
};
