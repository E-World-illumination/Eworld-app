import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import { userModify } from "../api/userApi";
import { ShowAlert } from "../utils/AlertUtils.js";

const Modify = () => {
  const inputBaseClass =
    "mb-18 border-b border-neutral-250 p-10 focus:outline-none text-neutral-500";
  const buttonClass = "border-none bg-home text-white";

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [error, setError] = useState("");

  const { token, login, setIsLoading, isLoading, userData } = useAuth();
  const { name, id, email, phone } = userData;

  const navigate = useNavigate();

  // userData로 초기 상태 설정
  useEffect(() => {
    setNewEmail(email || ""); // userData의 email로 초기화
    setNewPhone(phone || ""); // userData의 phone으로 초기화
  }, [email, phone]);

  const handleModify = async (e) => {
    e.preventDefault();
    try {
      const response = await userModify(token, {
        email: newEmail,
        phone: newPhone,
      });

      await ShowAlert("success", "", "수정 완료");
      navigate("/mypage");
    } catch (err) {
      setError("수정 중 오류 발생");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Header title="회원정보수정" isBack={true} />
      <form
        onSubmit={handleModify}
        className="mt-70 flex flex-col items-center"
      >
        <div className="mb-5">
          <p className="m-0 text-14">이름</p>
          <input
            type="text"
            value={name}
            className={`h-36 w-300 ${inputBaseClass}`}
            required
            disabled
          />
        </div>

        <div className="mb-5">
          <p className="m-0 text-14">아이디</p>
          <div className="flex">
            <input
              type="text"
              value={id}
              className={`h-36 w-300 ${inputBaseClass}`}
              disabled
            />
          </div>
        </div>

        <div className="mb-5">
          <p className="m-0 text-14">이메일 (선택)</p>
          <input
            type="email"
            value={newEmail} // 상태값으로 연결
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="이메일"
            className={`h-36 w-300 ${inputBaseClass}`}
          />
        </div>

        <div>
          <p className="text-14">휴대전화 *</p>
          <input
            type="phone"
            value={newPhone} // 상태값으로 연결
            onChange={(e) => setNewPhone(e.target.value)}
            placeholder="'-' 문자 없이 숫자만 입력해주세요"
            className={`h-36 w-300 ${inputBaseClass}`}
            required
          />
        </div>
        <div className="mb-40 flex w-full flex-row justify-between text-right text-14 font-bold text-bgRed underline underline-offset-2">
          <a href="/modify/delete" className="font-thin text-neutral-400">
            회원탈퇴
          </a>
          <a href="/modify/password">비밀번호 변경</a>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {isLoading ? (
          <div className="spinner">
            <MoonLoader size={15} />
          </div>
        ) : (
          <button type="submit" className={`h-50 w-300 text-16 ${buttonClass}`}>
            수정 완료
          </button>
        )}
      </form>
    </div>
  );
};

export default Modify;
