export const Input = () => {
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Input</div>
      <div className="separator" />
      <div className="para-normal">
        Reusable input components to take input from the user.
      </div>
      <div className="heading-3">Text box</div>
      <div className="preview m-5">
        <textarea className="textbox border-round-small border-1 color-1 p-3 w-5 font-4" />
      </div>
      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Input box</div>
      <div className="preview m-5">
        <div>
          <label
            className="input-label m-v-2 text-bold color-1 font-4"
            htmlFor="input-id"
          >
            Name
          </label>
          <input
            type="text"
            id="input-id"
            placeholder="John Doe"
            className="input border-round-small border-1 color-1 p-2 w-4 font-3"
          />
        </div>
      </div>
      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Input box with validation</div>
      <div className="preview m-5">
        <div>
          <label
            className="input-label m-v-2 text-bold color-1 font-4"
            htmlFor="input-id-email"
          >
            Email
          </label>
          <input
            type="email"
            id="input-id-email"
            placeholder="you@yourcompany.com"
            className="input border-round-small border-1 color-1 p-2 w-5 font-4"
          />
          <div className="error-prompt font-3 m-h-1 m-v-2 text-bold color-3">
            Invalid email address!
          </div>
        </div>
      </div>
      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Checkbox</div>
      <div className="preview m-5">
        <div>
          <label className="text-bold color-1 font-4" htmlFor="input-id-check">
            <input
              type="checkbox"
              id="input-id-check"
              className="border-round-small border-1 color-1 p-2 m-h-4 font-4"
            />
            Include out of stock
          </label>
        </div>
      </div>

      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Slider</div>
      <div className="preview m-5">
        <div>
          <label className="text-bold color-1 font-4" htmlFor="input-id-range">
            <input
              type="range"
              id="input-id-range"
              min="0"
              max="100"
              defaultValue="70"
              className="cur-point"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
