import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
const ModifyPw = () => {
  const inputBaseClass =
    "mb-18 border-b border-gray-250 p-10 focus:outline-none";

  const buttonClass = "border-none border-gray-500 bg-eworldRed text-white";

  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { login, setIsLoading, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/modify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, email, phone }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data); // Update context with user data
        navigate("/"); // Navigate to map page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "정보수정 에러");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Header title="회원정보수정" isBack="true" />
        <form
          onSubmit={handleSignUp}
          className="mt-40 flex flex-col items-center"
        >
          <div className="mb-5">
            <p className="m-0 text-14">
              <b>이름 *</b>
            </p>
            <input
              type="text"
              value="권혜진"
              onChange={(e) => setUsername(e.target.value)}
              className={`h-36 w-300 ${inputBaseClass}`}
              required
              disabled
            />
          </div>

          <div className="mb-5">
            <p className="m-0 text-14">
              <b>아이디 *</b>
            </p>
            <div className="flex">
              <input
                type="text"
                value="zinee"
                onChange={(e) => setUserId(e.target.value)}
                className={`h-36 w-300 ${inputBaseClass}`}
                required
                disabled
              />
            </div>
          </div>

          <div className="mb-5">
            <p className="m-0 text-14">
              <b>이메일 (선택)</b>
            </p>
            <input
              type="email"
              value="test@test.com"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              className={`h-36 w-300 ${inputBaseClass}`}
            />
          </div>

          <div>
            <p className="m-0 text-14">
              <b>휴대전화 *</b>
            </p>
            <input
              type="phone"
              value="01011112222"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="'-' 문자 없이 숫자만 입력해주세요"
              className={`mb-0 h-36 w-300 ${inputBaseClass}`}
              required
            />
          </div>
          <div className="mb-20 w-full p-15 text-right text-14 font-bold text-eworldRed underline-offset-2">
            비밀번호 변경
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
              수정 완료
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default ModifyPw;
