import React, { useEffect } from "react";

function KakaoLogin() {
  const { Kakao } = window;
  useEffect(() => {
    StartKakao();
  }, []);

  async function StartKakao() {
    try {
      const response = await fetch(
        `https://shortwalk-f3byftbfe4czehcg.koreacentral-01.azurewebsites.net/api/auth/kakaokey`,
        {
          method: "POST",
        }
      );
      const result = await response.json();

      await Kakao.init(result.kakaoJSKey);
      await Kakao.Auth.authorize({
        redirectUri: result.kakaoRedirectURI,
      });
    } catch (err) {
      // alert('로그인이 정상적으로 완료되지 않았습니다. 새로고침 이후 다시 시도해 주세요.');
      console.log(err);
    }
  }

  return <></>;
}

export default KakaoLogin;
