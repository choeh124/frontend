import Footer from "../Footer";
import Header from "../Header";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className="container">
      <div className="form-container">
        <h1>회원가입</h1>
        <div className = "form-row">
        <label>E-mail</label><input type="text"></input>
        <button>전송</button>
        </div>
        <div className = "form-row">
        <label>인증번호</label><input type="text"></input>
        <button>인증</button>
        </div>
        <div className = "form-row">
        <label>닉네임</label><input type="text"></input>
        </div>
        <div className = "form-row">
        <label>비밀번호</label><input type="text"></input>
        </div>
        <div className = "form-row">
        <label>비밀번호 확인</label><input type="text"></input>
        </div>
        
        <button>이메일 회원가입</button>
      
      </div>
      </div>
      <Footer />
    </div>
  );
}
