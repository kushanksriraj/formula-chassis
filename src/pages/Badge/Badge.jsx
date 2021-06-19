import { useScrollToTop, useTitle } from "../../common";

export const Badge = () => {
  useTitle("Chassis | Badge");
  useScrollToTop();
  return (
    <div className="p-5 box-shadow border-1 h-100 w-100">
      <div className="heading-2">Badge</div>
      <div className="separator" />
      <div className="para-normal">
        A badge is a counter shown on icons like cart, notification and avatars.
        It is also used to show online and offline status of a person.
      </div>
      <div className="heading-3">Badge on icon</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even w-5 m-4">
          <div className="badge-wrapper">
            <div className="far fa-envelope font-8">
              <div className="badge bg-color-3 color-2">2</div>
            </div>
          </div>

          <div className="badge-wrapper">
            <div className="fas fa-shopping-cart font-8">
              <div className="badge bg-color-3 color-2">2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/cb7zAvtUQNwOGHfc1gjl"
          type=""
          className="w-100 h-6"
        />
      </div>
      <div className="separator m-h-4 m-v-6"></div>
      <div className="heading-3">Badge on avatar</div>
      <div className="flex justify-center">
        <div className="preview flex justify-center space-even w-8 m-4">
          <div className="badge-wrapper">
            <img
              src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
              alt="Avatar"
              className="avatar-mid border-round m-3"
            />
            <div className="badge-avatar badge-avatar-red"></div>
          </div>
          <div className="badge-wrapper">
            <img
              src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
              alt="Avatar"
              className="avatar-mid border-round m-3"
            />
            <div className="badge-avatar badge-avatar-grey"></div>
          </div>
          <div className="badge-wrapper">
            <img
              src="https://pbs.twimg.com/profile_images/1345269713287270401/wUWxEuxH_400x400.jpg"
              alt="Avatar"
              className="avatar-mid border-round m-3"
            />
            <div className="badge-avatar badge-avatar-green"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-v-8">
        <embed
          src="https://carbon.now.sh/embed/WdCJ23q5GnhsHa3oo04z"
          type=""
          className="w-100 h-8"
        />
      </div>
    </div>
  );
};
