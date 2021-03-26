import "../../../chassis.css";
import "./card.css";

export const Card = () => {
  return (
    <div className="wrapper">
      <div className="heading__2">Card</div>
      <div className="description">
        A card is a piece of design that separates itself from the rest of the
        page, giving the user a hint to focus on it.
      </div>
      <div className="heading__3">
        Normal card (text-only, shadow and vertical)
      </div>
      <div className="preview">
        <div className="card">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis libero
          voluptas dolorum ipsa doloribus! Necessitatibus aliquid iusto unde
          iure laboriosam sunt magnam alias ex cum. Eum quae tenetur
          exercitationem.
        </div>
      </div>

      <div className="heading__3">Card with badge</div>
      <div className="preview">
        <div>
          <div className="card">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            libero voluptas dolorum ipsa doloribus! Necessitatibus aliquid iusto
            unde iure laboriosam sunt magnam alias ex cum. Eum quae tenetur
            exercitationem.
          </div>
          <div className="card-badge">4</div>
        </div>
      </div>

      <div className="heading__3">Card with dismiss (TODO)</div>

      <div className="heading__3">Card with text overlay</div>
      <div className="preview">
        <div>
          <div className="card">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kgqvlow0/smartwatch/5/d/g/storm-android-ios-boat-original-imafwwzpnkjjchfq.jpeg?q=70"
              className="img__responsive"
              alt=""
            />
            <div className="title__product">
              boAt Storm Smartwatch (Black Strap, Regular)
            </div>
            <div className="price__product">₹2,499</div>
          </div>
          <div className="card-text-overlay">50% off!</div>
        </div>
      </div>
       
      <div className="heading__3">Horizontal card</div>
      <div className="preview">
      <div className="card card-horizontal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis libero
        voluptas dolorum ipsa doloribus! Necessitatibus aliquid iusto unde iure
        laboriosam sunt magnam alias ex cum. Eum quae tenetur exercitationem.
      </div>
      </div>
    
    </div>
  );
};
