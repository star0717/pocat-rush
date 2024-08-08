import axios from "axios";

export function urlGetAllAuthority() {
  return axios.get("http://localhost:8080/api/authority/all");
}

export function urlGetAllUser() {
  return axios.get("http://localhost:8080/api/user/all");
}
export function urlUserSignUp() {
  return axios.post("http://localhost:8080/api/user/signup");
}

// 0808 승환 회원가입 api 테스트

async function userSignUp(userData) {
  try {
    let response = await urlGetAllAuthority();
    console.log("데이터 : ", response.data);
  } catch (error) {
    console.log("에러 : ", error);
  }
}

useEffect(() => {
  getAuthority();
}, []);
