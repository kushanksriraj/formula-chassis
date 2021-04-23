export const Button = () => {
  return (
    <div className="m-4 p-5 box-shadow border-1 h-100">
      <div className="heading-2">Button</div>
      <div className="separator" />
      <div className="para-normal">
        The button is a simple yet elegant clickable interface to let the user
        interact with it.
      </div>
      <div className="heading-3">Primary button</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-100 m-4">
          <button className="btn btn-small bg-color-2 color-1 p-h-5 text-bold font-4 border-round-small">
            Sort
          </button>
          <button className="btn btn-mid bg-color-3 color-2 p-h-4 text-bold font-4 border-round-small">
            Add to cart
          </button>
          <button className="btn btn-big bg-color-1 color-2 p-h-4 text-bold font-4">
            Sign up
          </button>
        </div>
      </div>
      <div className="separator m-h-4 m-v-6" />
      <div className="heading-3">Link</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even w-6 m-4">
          <a className="link p-1">See more</a>
          <a className="link p-1">Apply coupon</a>
        </div>
      </div>
      <div className="separator m-h-4 m-v-6" />
      <div className="heading-3">Icon button</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even w-5 m-4">
          <button className="btn icon-btn bg-inherit p-1">
            <div className="far fa-envelope font-8"></div>
          </button>
          <button className="btn icon-btn bg-inherit p-1">
            <div className="fas fa-shopping-cart font-8"></div>
          </button>
        </div>
      </div>
    </div>
  );
};
