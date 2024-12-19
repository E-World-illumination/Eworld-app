import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import { checkDuplicate } from "../api/authApi";
import { post } from "../api/apiClient";
import { ShowAlert } from "../utils/AlertUtils.js";

const SignUp = () => {
  const inputBaseClass =
    "mb-18 border-b border-neutral-200 p-10 focus:outline-none";
  const buttonClass = "border-none border-neutral-500 bg-home text-white";

  const [duplicateStatus, setDuplicateStatus] = useState("error");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [idError, setIdError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [userData, setUserData] = useState({
    id: "",
    password: "",
    name: "",
    phone: "",
    email: "",
  });

  const { isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const idRegex = /^(?=.*[A-Za-z])[A-Za-z0-9]{5,}$/;
    const phoneRegex = /^[0-9]{10,}$/;

    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));

    if (name === "id") {
      if (!idRegex.test(value)) {
        setIdError(
          "아이디는 영문자와 숫자로만 5자 이상 입력하세요. (영문자 필수)",
        );
        setButtonDisabled(true);
        if (value.length === 0) {
          setIdError("");
          setButtonDisabled(true);
        }
      } else {
        setIdError("");
        setButtonDisabled(false);
      }
    }

    if (name === "phone") {
      if (!phoneRegex.test(value)) {
        setPhoneError("휴대전화는 숫자만 10자리 이상 입력해주세요.");
        if (value.length === 0) {
          setPhoneError("");
        }
      } else {
        setPhoneError("");
      }
    }
  };

  const validateInputs = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (idError) {
      setError("아이디는 5자 이상 입력해주세요.");
      return false;
    }

    if (!passwordRegex.test(userData.password)) {
      setError("비밀번호는 영문자와 숫자 조합으로 8자리 이상이어야 합니다.");
      return false;
    }
    if (userData.password !== passwordCheck) {
      setError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    if (userData.name.length < 2) {
      setError("이름은 2자리 이상이어야 합니다.");
      return false;
    }

    if (phoneError) {
      setError("휴대전화는 숫자만 10자리 이상 입력해주세요.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (!validateInputs()) return;
    if (duplicateStatus === "error") {
      setError("ID 중복확인을 다시 한 번 해주세요.");
      return;
    }

    try {
      const response = await post("/auth/signup", userData);
      console.log(response);
      await ShowAlert("success", "", "회원가입을 성공하였습니다");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } catch (err) {
      console.error("회원가입 오류:", err);
      ShowAlert("error", "", `${err.response.data.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Header title="회원가입" isBack={true} />
      <form
        onSubmit={handleSignUp}
        className="mt-40 flex flex-col items-center"
      >
        <div className="mb-5">
          <p className="m-0 text-14">이름 *</p>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder="이름을 입력해주세요"
            className={`h-36 w-300 ${inputBaseClass}`}
            required
          />
        </div>
        <div className="mb-5">
          <p className="m-0 text-14">아이디 *</p>
          <div className="flex">
            <input
              type="text"
              name="id"
              value={userData.id}
              onChange={handleChange}
              placeholder="5자리 이상의 영문자, 숫자 조합"
              className={`mr-8 h-36 w-205 ${inputBaseClass} ${idError ? "mb-0" : ""}`}
              required
            />

            <button
              type="button"
              disabled={buttonDisabled}
              onClick={async (e) => {
                if (userData.id.length >= 5) {
                  const isDuplicate = await checkDuplicate(userData.id); // 중복 확인 결과 대기
                  if (!isDuplicate) {
                    setDuplicateStatus("error");
                    console.log(isDuplicate);
                    await ShowAlert("info", "", "이미 존재하는 ID입니다");

                    return;
                  } else {
                    setDuplicateStatus("success");
                    await ShowAlert("info", "", "사용 가능한 ID입니다");

                    return;
                  }
                } else {
                  await ShowAlert("info", "", "아이디는 5자 이상 입력해주세요");
                }
              }}
              className={`h-45 w-87 -translate-y-8 p-0 text-14 font-medium focus:outline-none ${buttonClass} disabled:cursor-not-allowed disabled:opacity-50`}
            >
              중복 확인
            </button>
          </div>
          {idError && (
            <p className="mb-0 mt-0 text-12 text-red-500">{idError}</p>
          )}
        </div>
        <div className="mb-5">
          <p className="m-0 text-14">비밀번호 *</p>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="8자리 이상의 영문자, 숫자 조합"
            className={`h-36 w-300 ${inputBaseClass}`}
            required
          />
        </div>
        <div className="mb-5">
          <p className="m-0 text-14">비밀번호 확인 *</p>
          <input
            type="password"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            placeholder="비밀번호와 동일하게 입력해주세요"
            className={`h-36 w-300 ${inputBaseClass}`}
            required
          />
        </div>
        <div className="mb-5">
          <p className="m-0 text-14">이메일 (선택)</p>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="이메일"
            className={`h-36 w-300 ${inputBaseClass}`}
          />
        </div>
        <div className="mb-20">
          <p className="m-0 text-14">휴대전화 *</p>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder="'-' 문자 없이 숫자만 입력해주세요"
            className={`h-36 w-300 ${inputBaseClass}`}
            required
          />
          {phoneError && (
            <p className="mb-0 mt-0 text-12 text-red-500">{phoneError}</p>
          )}
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {isLoading ? (
          <div className="spinner">
            <MoonLoader size={15} />
          </div>
        ) : (
          <button type="submit" className={`h-50 w-300 text-16 ${buttonClass}`}>
            회원가입
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
