import React from "react";
import { userDelete } from "../api/userApi";
import Header from "../components/Header";
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
      <Header title="회원탈퇴" isBack={true} />
      <div className="mx-auto w-200 p-30 text-center text-home">
        탈퇴 하시겠습니까?
      </div>
      <div className="mx-auto flex w-200 flex-row justify-between">
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
