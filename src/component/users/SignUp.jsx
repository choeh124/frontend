import Footer from "../Footer";
import Header from "../Header";
import "./SignUp.css";
import AuthEmail from "./AuthEmail";
import AuthVerify from "./AuthVerify";
import AuthSignUp from "./AuthSignUp";
import React, { useState } from 'react';

export default function SignUp() {

  const [email, setEmail] = useState(''); // 이메일 상태 관리
  const [number, setNumber] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleInputChange = (e) => {
    if("email" == e.target.id){
      setEmail(e.target.value.trim()); // input 값이 변경될 때 상태 업데이트
    }
    if("number" == e.target.id){
      setNumber(e.target.value.trim());
    }
    if("nickname" == e.target.id){
      setNickname(e.target.value.trim());
    }
    if("password" == e.target.id){
      setPassword(e.target.value.trim());
    }
    if("confirm" == e.target.id){
      setConfirm(e.target.value.trim());
    }
    
  };


  return (
    <div>
      <Header />
      <div className="container">
      <div className="form-container">
        <h1>회원가입</h1>
        <div className = "form-row">
        <label>E-mail</label><input type="text" id="email" value={email} onChange={handleInputChange}></input>
        <AuthEmail email={email}>전송</AuthEmail>
        </div>
        <div className = "form-row">
        <label>인증번호</label><input type="text" id="number" value={number} onChange={handleInputChange}></input>
        <AuthVerify number={number} email={email}>인증</AuthVerify>
        </div>
        <div className = "form-row">
        <label>닉네임</label><input type="text" id="nickname" onChange={handleInputChange}></input>
        </div>
        <div className = "form-row">
        <label>비밀번호</label><input type="password" id="password"></input>
        </div>
        <div className = "form-row">
        <label>비밀번호 확인</label><input type="password" id="confirm" onChange={handleInputChange} ></input>
        </div>
        <AuthSignUp number={number} nickname={nickname} password={password}>이메일 회원가입</AuthSignUp>
      </div>
      </div>
      <Footer />
    </div>
  );
}
