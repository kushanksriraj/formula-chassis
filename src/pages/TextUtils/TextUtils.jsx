export const TextUtils = () => {
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Text utilities</div>
      <div className="separator" />
      <div className="para-normal">Reusable text utilities</div>
      <div className="heading-3">Headings</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-7 m-4">
          <div className="heading-1">Heading 1</div>
          <div className="heading-2">Heading 2</div>
          <div className="heading-3">Heading 3</div>
        </div>
      </div>
      <div className="separator m-6" />
      <div className="heading-3">Text</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-7 m-4">
          <div className="text-bold">Text bold</div>
          <div className="text-center">Text center</div>
          <div className="text-grey">Text grey</div>
        </div>
      </div>
      <div className="separator m-6" />
      <div className="heading-3">Paragraph</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-100 m-4">
          <div className="heading-3">Paragraph normal</div>
          <div className="para-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            excepturi eaque quasi perferendis et itaque, enim aliquid ipsa
            doloremque nesciunt. Eum nulla velit neque, facilis praesentium esse
            veniam tempora enim.
          </div>
          <div className="heading-3 p-h-4">Paragraph with margin </div>
          <div className="para-big">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            nulla nobis enim neque eos animi ab quae beatae. Dolor in facilis
            porro aut quia non suscipit eius ab officiis nulla!
          </div>
        </div>
      </div>
    </div>
  );
};
