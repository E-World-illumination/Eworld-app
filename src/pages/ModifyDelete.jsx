import { userDelete } from "../api/userApi";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ModifyDelete = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  const handleDelete = () => {
    userDelete(token);

    localStorage.removeItem("token");
    navigate("/");
  };

  const questionDelete = () => {
    if (
      window.confirm(
        "회원 탈퇴시 모든 정보가 삭제됩니다. 정말 탈퇴하시겠습니까?",
      )
    ) {
      handleDelete();
    }
  };

  return (
    <>
      <div className="titleClass">회원탈퇴</div>
      <div className="text-home">회원탈퇴 하시겠습니까?</div>
      <div className="flex flex-row justify-between">
        <button className="btnClass" onClick={() => navigate(-1)}>
          취소
        </button>
        <button className="btnClass" onClick={questionDelete}>
          탈퇴
        </button>
      </div>
    </>
  );
};

export default ModifyDelete;
