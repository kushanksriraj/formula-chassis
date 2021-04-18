import styles from "./Avatar.module.css";

export const Avatar = () => {
  return (
    <div className="m-4 p-5 box-shadow-1 border-1">
      <div className="heading-2">Avatar</div>
      <div className="para-normal">
        An avatar is an icon or figure representing a person in a profile
        section or chat screens.
      </div>
      <div className="center-child">
        <div className="preview spaced-child">
          <img
            src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
            alt="Avatar"
            className="avatar-small border-round m-3"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
            alt="Avatar"
            className="avatar-mid border-round m-3"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
            alt="Avatar"
            className="avatar-big border-round m-3"
          />
        </div>
      </div>
    </div>
  );
};
