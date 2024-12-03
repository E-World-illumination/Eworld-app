import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import { MoonLoader } from "react-spinners";
import styles from "./styles.module.css";

const SignUp = () => {
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
      <div className={styles.SignInPage}>
        <div className={styles.Title}>
          <h2>회원가입</h2>
        </div>
        <form onSubmit={handleSignUp} className={styles.SignUpForm}>
          <div>
            <p>
              <b>이름 *</b>
            </p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          <div>
            <p>
              <b>아이디 *</b>
            </p>
            <p className={styles.id}>
              <input
                className={styles.idInput}
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="5자리 이상의 영문자, 숫자 조합"
                required
              />
              <button onClick={(e) => checkDuplicate(e, styles.idInput)}>
                중복확인
              </button>
            </p>
          </div>
          <div>
            <p>
              <b>비밀번호 *</b>
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="8자리 이상의 영문자, 숫자 조합"
              required
            />
          </div>
          <div>
            <p>
              <b>비밀번호 확인 *</b>
            </p>
            <input
              type="passwordCheck"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              placeholder="비밀번호와 동일하게 입력해주세요"
              required
            />
          </div>
          <div>
            <p>
              <b>이메일 (선택)</b>
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
            />
          </div>

          <div>
            <p>
              <b>휴대전화 *</b>
            </p>
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="- 문자 없이 숫자만 입력해주세요"
              required
            />
          </div>

          <p className={styles.clause}>
            회원가입 약관에 모두 동의합니다. <input type="checkbox"></input>
          </p>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {isLoading ? (
            <div className="spinner">
              <MoonLoader size={15}></MoonLoader>
            </div>
          ) : (
            <button type="submit">회원가입</button>
          )}
        </form>
      </div>
    </>
  );
};

export default SignUp;
