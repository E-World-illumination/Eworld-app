import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import MenuBar from "../components/MenuBar";

const SignUp = () => {
  const inputBaseClass =
    "mb-18 border-b border-gray-250 p-10 focus:outline-none";

  const buttonClass = "border-none border-gray-500 bg-eworldRed text-white";

  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { login, setIsLoading, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, userId, password, email, phone }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data); // Update context with user data
        navigate("/"); // Navigate to map page
      } else {
        const errorData = await response.json();
        setError(errorData.message || "회원가입 에러");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  //중복체크
  const checkDuplicate = async (e, data) => {
    e.preventDefault();
    console.log(data);
    const className = document.getElementsByClassName(data);
    console.log(className[0].value);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Header title="회원가입" />
        <form
          onSubmit={handleSignUp}
          className="mt-70 flex flex-col items-center"
        >
          <div className="mb-5">
            <p className="m-0 text-14">
              <b>이름 *</b>
            </p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="이름을 입력해주세요"
              className={`h-36 w-330 ${inputBaseClass}`}
              required
            />
          </div>

          <div className="mb-5">
            <p className="m-0 text-14">
              <b>아이디 *</b>
            </p>
            <div className="flex">
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="5자리 이상의 영문자, 숫자 조합"
                className={`mr-8 h-36 w-235 ${inputBaseClass}`}
                required
              />
              <button
                onClick={(e) => checkDuplicate(e, "idInput")}
                className={`h-45 w-87 -translate-y-8 p-0 text-14 font-medium focus:outline-none ${buttonClass}`}
              >
                중복확인
              </button>
            </div>
          </div>

          <div className="mb-5">
            <p className="m-0 text-14">
              <b>비밀번호 *</b>
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="8자리 이상의 영문자, 숫자 조합"
              className={`h-36 w-330 ${inputBaseClass}`}
              required
            />
          </div>
          <div className="mb-5">
            <p className="m-0 text-14">
              <b>비밀번호 확인 *</b>
            </p>
            <input
              type="passwordCheck"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              placeholder="비밀번호와 동일하게 입력해주세요"
              className={`h-36 w-330 ${inputBaseClass}`}
              required
            />
          </div>
          <div className="mb-5">
            <p className="m-0 text-14">
              <b>이메일 (선택)</b>
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              className={`h-36 w-330 ${inputBaseClass}`}
            />
          </div>

          <div className="mb-37">
            <p className="m-0 text-14">
              <b>휴대전화 *</b>
            </p>
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="'-' 문자 없이 숫자만 입력해주세요"
              className={`h-36 w-330 ${inputBaseClass}`}
              required
            />
          </div>

          <div className="mb-40 flex w-330 items-center font-bold text-16 text-black">
            <p className="ml-15 mr-65">회원가입 약관에 모두 동의합니다.</p>
            <input type="checkbox" className="h-20 w-20" />
          </div>

          {error && <p className="text-red-500">{error}</p>}
          {isLoading ? (
            <div className="spinner">
              <MoonLoader size={15} />
            </div>
          ) : (
            <button type="submit" className={`h-50 w-330 text-16 ${buttonClass}`}>
              회원가입
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;
