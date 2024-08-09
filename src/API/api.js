import axios from "axios";

export function urlGetAllAuthority() {
  return axios.get("http://localhost:8080/api/authority/all");
}
export function urlGetAllUser() {
  return axios.get("http://localhost:8080/api/user/all");
}
export function urlUserSignUp(signUpData) {
  return axios.post("http://localhost:8080/api/user/signup", signUpData);
}
export function urlSessionCurrent(header) {
  return axios.get("http://localhost:8080/api/user/current", header);
}
export function urlJwtLogin(loginData) {
  return axios.post("http://localhost:8080/api/authenticate", loginData);
}

// 0808 승환 현재로그인상태 테스트
export function sessionCurrent() {
  let token = localStorage.getItem("JWT-token");
  let header = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  async function currentCheck() {
    if (token) {
      try {
        let response = await urlSessionCurrent(header);

        console.log("데이터 : ", response.data);
      } catch (error) {
        console.log("에러 : ", error);
      }
    }
  }
  currentCheck();

  return <></>;
}

// 0809 승환 로그아웃 테스트
export async function userLogout() {
  if (window.confirm("로그아웃 하시겠습니까?")) {
    // localStorage에서 토큰 삭제
    localStorage.removeItem("JWT-token");
    window.location.reload();
    console.log("로그아웃 완료");
  }

  return <></>;
}
