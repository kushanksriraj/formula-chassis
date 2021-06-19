import { useScrollToTop, useTitle } from "../../common";

export const Input = () => {
  useTitle("Chassis | Input");
  useScrollToTop();
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Input</div>
      <div className="separator" />
      <div className="para-normal">
        Reusable input components to take input from the user.
      </div>
      <div className="heading-3">Text box</div>

      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
          <textarea className="textbox border-round-small border-1 color-1 p-3 w-5 font-4" />
        </div>
      </div>

      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/5Yi8sEn3zmZdwsZm9k6R"
          type=""
          className="w-100 h-4"
        />
      </div>

      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Input box</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
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
      </div>

      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/PUb4CucZgV5QGo9cAfWn"
          type=""
          className="w-100 h-2"
        />
      </div>

      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Input box with validation</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
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
      </div>

      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/P9jzquoiIiQIMTEdKbfZ"
          type=""
          className="w-100 h-8"
        />
      </div>

      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Checkbox</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
          <div>
            <label
              className="text-bold color-1 font-4"
              htmlFor="input-id-check"
            >
              <input
                type="checkbox"
                id="input-id-check"
                className="border-round-small border-1 color-1 p-2 m-h-4 font-4"
              />
              Include out of stock
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/Vv4BmtLDm9WKkYGB4iZi"
          type=""
          className="w-100 h-7"
        />
      </div>

      <div className="separator m-v-6 m-h-4" />
      <div className="heading-3">Slider</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even wrap w-100 m-4 align-center">
          <div>
            <label
              className="text-bold color-1 font-4"
              htmlFor="input-id-range"
            >
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

      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/GUUibUzPn1gbcdTmjfqb"
          type=""
          className="w-100 h-3"
        />
      </div>
    </div>
  );
};
