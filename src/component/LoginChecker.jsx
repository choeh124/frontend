import axios from "axios";
import { useState } from "react";

export default function LoginChecker() {
  const [isLogined, setIsLogined] = useState(false);
  useState(() => {
    const response = axios.get("http://127.0.0.1/api/auth/check");
    if (!response.ok) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.href = "/login";
    }
  }, []);

  return <div></div>;
}
