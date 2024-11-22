import Footer from "../Footer";
import Header from "../Header";
import "../users/SignUp.css";
import React, { useEffect, useState } from 'react';

export default function UserUpdate() {

  //const token = window.sessionStorage.getItem("Authorization");
  const [email, setEmail] = useState('');
  const [beforeNickname, setBeforeNickname] = useState('');
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');

  const token = window.sessionStorage.getItem("Authorization");

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    const fetchData = async () => {

      fetch("http://localhost:8000/api/users", {
        method: "GET", 
        headers: {
          "Authorization": token,
        },
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setEmail(data.email);
        setBeforeNickname(data.nickname);
        setId(data.id);
      })
      .catch((error) => {
        console.error("Error:", error); // 오류 처리
      });
      
    };

    fetchData();
  }, []);  // 빈 배열을 넣어 컴포넌트 마운트 시 한 번만 실행되도록 함
  
  const handleInputChange = (e) => {
    if("afterNickname" == e.target.id){
      setNickname(e.target.value.trim());
    }
  };
  
  const handleUserEditSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    fetch(`http://localhost:8000/api/users/${id}`, {
      method: "PATCH", // POST 요청
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({ nickname }),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 응답에 문제가 있습니다.");
      }
      return response.json();
    })
    .then((data) => {
      alert('수정되었습니다.');
      setBeforeNickname(data.nickname);
      setNickname('');
    })
    .catch((error) => {
      console.error("Error:", error); // 오류 처리
    });
  };

  return (
    <div>
      <Header />
      <div className="container">
      <div className="form-container">
        <h1>회원 정보 수정</h1>
        <div className = "form-row">
        <label>E-mail</label><input type="text" id="email" value={email} disabled></input>
        </div>
        <div className = "form-row">
        <label>수정전 닉네임</label><input type="text" id="beforeNickname" value={beforeNickname} disabled></input>
        </div>
        <div className = "form-row">
        <label>수정후 닉네임</label><input type="text" id="afterNickname" value={nickname} onChange={handleInputChange}></input>
        </div>
        <button className="special-button" onClick={handleUserEditSubmit}>저장
      </button>
      </div>
      </div>
      <Footer />
    </div>
  );
}
