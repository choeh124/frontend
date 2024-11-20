import "./SignUp.css";
import React, { useState } from "react";

const AuthSignUp = (props) => {
    console.log("props=====>",props);
    const [data, setData] = useState(null); // API 응답 데이터를 저장할 상태
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null); // 에러 상태

    const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    console.log("handleSubmit props.email=====>",props.email);
    const email = props.email; // 입력한 이메일 값 (예시)
    const nickname = props.nickname;
    const password = props.password;
  
    fetch("http://localhost:8000/api/auth/signup", {
      method: "POST", // POST 요청
      headers: {
        "Content-Type": "application/json", // JSON 형식으로 전송
      },
      body: JSON.stringify({ email, nickname, password }), // 이메일을 JSON 형태로 전송
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        return response;
      })
      .then((data) => {
        console.log(data); // 응답 데이터 출력
        setLoading(true);
        alert('회원가입 되었습니다.');
      })
      .catch((error) => {
        console.error("Error:", error); // 오류 처리
      });
  };


  return (
    <div>
      <button className="special-button" onClick={handleSubmit}>
        {loading ? "이메일 회원가입" : "이메일 회원가입"}
      </button>
    </div>
  );
};

export default AuthSignUp;
