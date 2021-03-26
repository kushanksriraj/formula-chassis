import "../../../chassis.css";
import "./image.css";

export const Image = () => {
  return (
    <div className="wrapper">
      <div className="heading__2">Image</div>
      <div className="description">
        An image is the primary focus for a website and it should be responsive.
      </div>
      <div className="heading__3">Responsive</div>
      <div className="preview">
        <div className="img__container">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/kjuby4w0/television/x/q/y/oled65gxpta-lg-original-imafzbfxnutpvmxw.jpeg?q=70"
            alt=""
            className="img__responsive"
          />
        </div>
      </div>
      <div className="heading__3">Round image</div>
      <div className="preview">
        <div className="img__container">
          <img
            src="https://rukminim1.flixcart.com/image/416/416/kjuby4w0/television/x/q/y/oled65gxpta-lg-original-imafzbfxnutpvmxw.jpeg?q=70"
            alt=""
            className="img__responsive img__round"
          />
        </div>
      </div>
    </div>
  );
};
