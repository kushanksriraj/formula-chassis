import { useScrollToTop, useTitle } from "../../common";

export const Image = () => {
  useTitle("Chassis | Image");
  useScrollToTop();
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Image</div>
      <div className="separator" />
      <div className="para-normal">
        An image is the primary focus for a website and it should be responsive.
      </div>
      <div className="heading-3">Responsive</div>
      <div className="flex justify-center">
        <div>
          <img
            className="img-responsive"
            src="https://picsum.photos/300/200"
            alt="img-responsive"
          />
        </div>
      </div>

      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/yaE5oRjBw8RGO4TJA7vB"
          type=""
          className="w-100 h-4"
        />
      </div>

      <div className="separator m-h-4 m-v-6"></div>
      <div className="heading-3">Rounded corners</div>
      <div className="flex justify-center">
        <div className="">
          <img
            className="img-responsive border-round-small"
            src="https://picsum.photos/300/200"
            alt="img-responsive"
          />
        </div>
      </div>
      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/5Yi8sEn3zmZdwsZm9k6R"
          type=""
          className="w-100 h-4"
        />
      </div>
    </div>
  );
};
