import Footer from "../Footer";
import Header from "../Header";

export default function SignUp() {
  return (
    <div className="login-container">
      <Header />
      <h1>회원가입</h1>
      E-mail<input type="text"></input>
      <button>전송</button>
      인증번호<input type="text"></input>
      <button>인증</button>
      닉네임<input type="text"></input>
      비밀번호<input type="text"></input>
      비밀번호 확인<input type="text"></input>
      <button>이메일 회원가입</button>
      <Footer />
    </div>
  );
}
