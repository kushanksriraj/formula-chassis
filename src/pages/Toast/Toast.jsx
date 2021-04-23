export const Toast = () => {
  return (
    <div className="m-4 p-5 box-shadow border-1 h-100">
      <div className="heading-2">Toast</div>
      <div className="separator" />
      <div className="para-normal">
        Toast message or snackbar is used to give some feedback to the user.
      </div>
      <div className="heading-3">Success toast</div>
      <div className="m-4">
        <div className="toast bg-color-2 color-5 p-v-3 p-h-4 border-round-small w-6 text-bold border-round text-center flex space-between">
          <div>Successfully add to the cart!</div>
          <div>
            <button className="btn icon-btn bg-inherit">
              <i className="far fa-times-circle font-4 color-5"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="separator m-v-8 m-h-4" />
      <div className="heading-3">Error toast</div>
      <div className="m-4">
        <div className="toast bg-color-2 color-3 p-v-3 p-h-4 border-round-small w-5 text-bold border-round text-center flex space-between">
          <div>Some error occurred!</div>
          <div>
            <button className="btn icon-btn bg-inherit">
              <i className="far fa-times-circle font-4 color-3"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
5;
