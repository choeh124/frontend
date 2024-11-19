import Footer from "../Footer";
import Header from "../Header";

export default function SignUp() {
  return (
    <div>
      <Header />
      <h1>회원가입</h1>
      <br />
      E-mail<input type="text"></input>
      <button>전송</button>
      <br />
      인증번호<input type="text"></input>
      <button>인증</button>
      <br />
      닉네임<input type="text"></input>
      <br />
      비밀번호<input type="text"></input>
      <br />
      비밀번호 확인<input type="text"></input>
      <br />
      <button>이메일 회원가입</button>
      <Footer />
    </div>
  );
}
