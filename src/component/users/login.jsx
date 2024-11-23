import Footer from "../Footer";
import Header from "../Header";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="button-box">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/login/email";
            }}
          >
            <svg
              width="39"
              height="43"
              viewBox="0 0 39 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 35.8334C5.60625 35.8334 4.84115 35.4825 4.20469 34.7808C3.56823 34.0791 3.25 33.2355 3.25 32.2501V10.7501C3.25 9.76466 3.56823 8.92109 4.20469 8.21935C4.84115 7.51762 5.60625 7.16675 6.5 7.16675H32.5C33.3937 7.16675 34.1589 7.51762 34.7953 8.21935C35.4318 8.92109 35.75 9.76466 35.75 10.7501V32.2501C35.75 33.2355 35.4318 34.0791 34.7953 34.7808C34.1589 35.4825 33.3937 35.8334 32.5 35.8334H6.5ZM19.5 23.2917L6.5 14.3334V32.2501H32.5V14.3334L19.5 23.2917ZM19.5 19.7084L32.5 10.7501H6.5L19.5 19.7084ZM6.5 14.3334V10.7501V32.2501V14.3334Z"
                fill="white"
              />
            </svg>
            이메일 로그인
          </button>
          <img src="./kakao_login_large_wide.png" onClick={(e) => {
              e.preventDefault();
              window.location.href = "/login/kakao";
            }}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
