import { useState } from "react";
import { useScrollToTop, useTitle } from "../../common";
import { ModalLarge } from "./ModalLarge";
import { ModalSmall } from "./ModalSmall";

export const Modal = () => {
  const [showSmall, setShowSmall] = useState(false);
  const [showLarge, setShowLarge] = useState(false);

  useTitle("Chassis | Modal");
  useScrollToTop();

  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Modal</div>
      <div className="separator" />
      <div className="para-normal">
        A modal is a popup that is used to grab user&apos;s attention.
      </div>
      <div className="heading-3">Small</div>

      <div className="preview m-5 flex justify-center">
        <button
          onClick={() => setShowSmall(true)}
          className="btn color-1 bg-color-2 font-3 text-bold p-v-2 p-h-4 border-round-small"
        >
          Show
        </button>
        <ModalSmall show={showSmall} setShow={setShowSmall} />
      </div>

      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/P9CcTHcNLenioCPWlLR2"
          type=""
          className="w-100 h-7"
        />
      </div>

      <div className="separator m-v-8 m-h-4" />
      <div className="heading-3">Large</div>
      <div className="preview m-5 flex justify-center">
        <button
          className="btn color-1 bg-color-2 font-3 text-bold p-v-2 p-h-4 border-round-small"
          onClick={() => setShowLarge(true)}
        >
          Show
        </button>
        <ModalLarge show={showLarge} setShow={setShowLarge} />
      </div>
      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/iH22scAme1tLS46eItmi"
          type=""
          className="w-100 h-6"
        />
      </div>
    </div>
  );
};
