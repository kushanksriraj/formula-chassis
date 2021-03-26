import "../../../chassis.css";
import "./simple-grid.css";

export const SimpleGrid = () => {
  return (
    <div className="wrapper">
      <div className="heading__2">Simplified Grid</div>
      <div className="description">
        Grid layout simplified to build layouts faster.
      </div>

      <div className="heading__3">grid-2: two items in a grid</div>
      <div className="preview">
      <div className="grid__two">
        <div className="card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          dolore dicta nobis vel cumque at excepturi consequuntur enim? Nostrum
          pariatur, assumenda distinctio magnam accusantium nobis eos veritatis
          dolor placeat doloremque!
        </div>
        <div className="card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo et
          dolores dicta, odio maiores, rerum cumque maxime ratione in
          exercitationem soluta laboriosam provident ab. Asperiores dolore iure
          repellendus ea architecto?
        </div>
      </div>
      </div>

      <div className="heading__3">grid-3: three items in a grid</div>
      <div className="preview">
      <div className="grid__three">
        <div className="card">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          dolore dicta nobis vel cumque at excepturi consequuntur enim? Nostrum
          pariatur, assumenda distinctio magnam accusantium nobis eos veritatis
          dolor placeat doloremque!
        </div>
        <div className="card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo et
          dolores dicta, odio maiores, rerum cumque maxime ratione in
          exercitationem soluta laboriosam provident ab. Asperiores dolore iure
          repellendus ea architecto?
        </div>
        <div className="card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo et
          dolores dicta, odio maiores, rerum cumque maxime ratione in
          exercitationem soluta laboriosam provident ab. Asperiores dolore iure
          repellendus ea architecto?
        </div>
      </div>
      </div>
    </div>
  );
};
