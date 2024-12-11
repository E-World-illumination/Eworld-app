import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Info = ({ social }) => {
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
          <div className="pl-10 text-26 font-bold text-black">권혜진</div>
          <div className={`boldRedClass py-10 pl-15`}>zinee</div>
        </div>
        <div className="flex items-center text-black">
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </a>
  );
};

export default Info;
