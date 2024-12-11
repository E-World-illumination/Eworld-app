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
        <div>
          <div className="pl-10 text-26 font-bold text-black">어서오세요 !</div>
          <div className={`boldRedClass py-10 pl-15`}>{name}님</div>
        </div>
        <div className="flex items-center text-black">
          {isActive ? <></> : <FontAwesomeIcon icon={faAngleRight} />}
        </div>
      </div>
    </a>
  );
};

export default Info;
