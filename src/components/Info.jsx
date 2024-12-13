import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Info = ({ social, name, profile_img }) => {
  const isActive = !!social;

  return (
    <a
      href={isActive ? "#" : "/modify"}
      onClick={(e) => {
        if (isActive) {
          e.preventDefault();
        }
      }}
    >
      <div className="flex w-330 items-center justify-between rounded-[10px] border border-neutral-300 px-20 py-25">
        <div className="w-90">
          <img
            src={`${profile_img ? profile_img : "/login/profile.png"}`}
            alt="프로필사진"
            width="74"
          />
        </div>
        <div className="flex w-200 flex-col">
          <div className="font-bol mb-3 pl-8 text-20">어서오세요!</div>
          <div className="flex items-center">
            <div className={`pl-8 text-20 font-bold text-home`}>{name} 님</div>
            <img
              src={`/login/login_${social}.png`}
              alt="유저 이미지"
              className="ml-10 h-20 w-20"
            />
          </div>
        </div>
        <div className="flex items-center">
          {isActive ? <></> : <FontAwesomeIcon icon={faAngleRight} />}
        </div>
      </div>
    </a>
  );
};

export default Info;
