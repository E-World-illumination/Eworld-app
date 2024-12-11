import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Info = ({ social, name }) => {
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
      <div className="flex h-120 w-330 justify-between rounded-[10px] border border-gray-300 p-20">
        <div className="flex flex-col">
          <div className="mb-3 pl-8 text-26 font-bold text-black">
            어서오세요!
          </div>
          <div className="flex items-center">
            <div className={`boldRedClass pl-8`}>{name} 님</div>
            <img
              src={`/login/login_${social}.png`}
              alt="유저 이미지"
              className="ml-10 h-20 w-20"
            />
          </div>
        </div>
        <div className="flex items-center text-black">
          {isActive ? <></> : <FontAwesomeIcon icon={faAngleRight} />}
        </div>
      </div>
    </a>
  );
};

export default Info;
