import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { MoonLoader } from "react-spinners";
import Header from "../components/Header";
import { fetchAllIds } from "../api/authApi";
import { post } from "../api/apiClient";

const SignUp = () => {
  const inputBaseClass =
    "mb-18 border-b border-neutral-200 p-10 focus:outline-none";
  const buttonClass = "border-none border-neutral-500 bg-eworldRed text-white";

  const [duplicateCheck, setDuplicateCheck] = useState(0);
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    id: "",
    password: "",
    name: "",
    email: "",
    phone: "",
  });

  const { setIsLoading, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const validateInputs = () => {
    if (userData.id.length < 5) {
      setError("아이디는 5자리 이상이어야 합니다.");
      return false;
    }
    if (userData.password.length < 8) {
      setError("비밀번호는 8자리 이상이어야 합니다.");
      return false;
    }
    if (userData.password !== passwordCheck) {
      setError("비밀번호와 확인란이 다릅니다.");
      return false;
    }
    if (userData.phone.length < 10) {
      setError("휴대전화는 10자리 이상 이어야 합니다.");
      return false;
    }
    if (userData.name.length < 2) {
      setError("이름은 2자리 이상이어야 합니다.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (userData.email && !emailRegex.test(userData.email)) {
      setError("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    if (duplicateCheck == 0) {
      setError("아이디 중복확인을 해주세요.");
      return;
    }
    if (duplicateCheck == 1) {
      setError("아이디가 이미 존재합니다.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await post("/auth/signup", userData);
      console.log(response);
      alert("회원가입 성공!");
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } catch (err) {
      console.error("회원가입 오류:", err);
      setError("회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const checkDuplicate = async (e, userId) => {
    e.preventDefault();
    const allIds = await fetchAllIds();
    if (allIds.includes(userId)) {
      setDuplicateCheck(1);
      setError(`${userId}가 이미 존재합니다.`);
    } else {
      setDuplicateCheck(2);
      setError(`${userId}는 사용 가능합니다.`);
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
              className={`mr-8 h-36 w-205 ${inputBaseClass}`}
              required
            />
            <button
              onClick={(e) => checkDuplicate(e, "id")}
              className={`h-45 w-87 -translate-y-8 p-0 text-14 font-medium focus:outline-none ${buttonClass}`}
            >
              중복확인
            </button>
          </div>
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
        </div>
        {duplicateCheck && <p className="text-red-500">{error}</p>}
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
