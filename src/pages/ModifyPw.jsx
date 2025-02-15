import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import { userModify } from "../api/userApi";
import { ShowAlert } from "../utils/AlertUtils.js";

const ModifyPw = () => {
  const inputBaseClass =
    "mb-18 border-b border-neutral-250 p-10 focus:outline-none text-neutral-500";

  const buttonClass = "border-none bg-home text-white";

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const { token, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      setError("비밀번호는 영문자와 숫자 조합으로 8자리 이상이어야 합니다.");
      return false;
    }

    if (newPassword !== newPasswordCheck) {
      setError("비밀번호가 일치하지 않습니다.");
      return false;
    }

    try {
      const response = await userModify(token, {
        currentPassword: currentPassword,
        changePassword: newPassword,
      });
      if (response.data.status === "success") {
        await ShowAlert("success", "", "비밀번호 변경 완료");
        navigate("/mypage");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("기존 비밀번호가 일치하지 않습니다.");
      }
      console.error("비밀번호 변경 오류:", err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Header title="비밀번호변경" isBack={true} />
        <form
          onSubmit={handleSignUp}
          className="mt-70 flex flex-col items-center"
        >
          <div className="mb-5">
            <p className="m-0 text-14">현재 비밀번호</p>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력하세요"
              className={`h-36 w-300 ${inputBaseClass}`}
              required
            />
          </div>

          <div className="mb-5">
            <p className="m-0 text-14">변경할 비밀번호</p>
            <div className="flex">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="8자리 이상의 영문자, 숫자 조합"
                className={`h-36 w-300 ${inputBaseClass}`}
                required
              />
            </div>
          </div>

          <div className="mb-50">
            <p className="m-0 text-14">변경할 비밀번호 확인</p>
            <input
              type="password"
              value={newPasswordCheck}
              onChange={(e) => setNewPasswordCheck(e.target.value)}
              placeholder="변경할 비밀번호와 동일하게 입력해주세요"
              className={`h-36 w-300 ${inputBaseClass}`}
              required
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {isLoading ? (
            <div className="spinner">
              <MoonLoader size={15} />
            </div>
          ) : (
            <button
              type="submit"
              className={`h-50 w-300 text-16 ${buttonClass}`}
            >
              비밀번호 수정완료
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default ModifyPw;
