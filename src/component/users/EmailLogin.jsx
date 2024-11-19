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
            <input type="text" id="email" className="input2"></input>
          </div>
          <div className="form-row">
            <label>비밀번호</label>
            <input type="password" id="password" className="input2"></input>
          </div>
          <button className="special-button" onClick="">
          <svg  className="mail-icon" width="14.5" height="13.5" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.83366 22.5C4.16908 22.5 3.60015 22.2797 3.12689 21.8391C2.65362 21.3984 2.41699 20.8687 2.41699 20.25V6.75C2.41699 6.13125 2.65362 5.60156 3.12689 5.16094C3.60015 4.72031 4.16908 4.5 4.83366 4.5H24.167C24.8316 4.5 25.4005 4.72031 25.8738 5.16094C26.347 5.60156 26.5837 6.13125 26.5837 6.75V20.25C26.5837 20.8687 26.347 21.3984 25.8738 21.8391C25.4005 22.2797 24.8316 22.5 24.167 22.5H4.83366ZM14.5003 14.625L4.83366 9V20.25H24.167V9L14.5003 14.625ZM14.5003 12.375L24.167 6.75H4.83366L14.5003 12.375ZM4.83366 9V6.75V20.25V9Z" fill="#42ADFB"/>
          </svg>
          이메일 로그인</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
