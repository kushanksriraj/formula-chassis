export const Avatar = () => {
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Avatar</div>
      <div className="separator" />
      <div className="para-normal">
        An avatar is an icon or figure representing a person in a profile
        section or chat screens.
      </div>
      <div className="flex justify-center">
        <div className="preview flex space-around align-center w-6 m-v-5">
          <img
            src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
            alt="Avatar"
            className="avatar-small border-round"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
            alt="Avatar"
            className="avatar-mid border-round"
          />
          <img
            src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
            alt="Avatar"
            className="avatar-big border-round"
          />
        </div>
      </div>
    </div>
  );
};
