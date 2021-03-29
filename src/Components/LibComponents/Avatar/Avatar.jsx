import "../../../chassis.css";
import "./avatar.css";

export const Avatar = () => {
  return (
    <div className="wrapper">
      <div className="heading-2">Avatar</div>
      <div className="description">
        An avatar is an icon or figure representing a person in a profile
        section or chat screens.
      </div>
      <div className="preview">
        <img
          src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
          alt="Avatar"
          className="avatar-sm border-round"
        />
        <img
          src="https://pbs.twimg.com/profile_images/941690739901153280/uzn7oAUG_400x400.jpg"
          alt="Avatar"
          className="avatar-md border-round"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1238749114348662784/p9hc5fuP_400x400.jpg"
          alt="Avatar"
          className="avatar-big border-round"
        />
      </div>
      <div className="code">
        {/* add code section */}
      </div>
    </div>
  );
};
