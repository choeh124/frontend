import Footer from "../Footer";
import Header from "../Header";
import "./EmailLogin.css";

export default function EmailLogin() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="form-container">
          <h1>로그인</h1>
          <div className="form-row">
            <label>E-mail</label>
            <input type="text"></input>
          </div>
          <div className="form-row">
            <label>비밀번호</label>
            <input type="text"></input>
          </div>
          <button className="special-button">이메일 로그인</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
