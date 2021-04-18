import styles from "./Badge.module.css";

export const Badge = () => {
  return (
    <div className="m-4 p-5 box-shadow-1 border-1">
      <div className="heading-2">Badge</div>
      <div className="para-normal">
        A badge is a counter shown on icons like cart, notification and avatars.
        It is also used to show online and offline status of a person.
      </div>
      <div className="heading-3">Badge on icon</div>
      <div className="center-child">
        <div className="preview spaced-child">
          <div className="badge-wrapper">
            <div className="far fa-envelope font-8"></div>
            <div className="badge bg-color-3 color-2">
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
