import axios from "axios";

export function urlGetAllAuthority() {
  return axios.get("http://localhost:8080/api/authority/all");
}

export function urlGetAllUser() {
  return axios.get("http://localhost:8080/api/user/all");
}
export function urlUserSignUp(userSignUpData) {
  return axios.post("http://localhost:8080/api/user/signup", userSignUpData);
}
export function urlUserLogin(loginData) {
  return axios.post("http://localhost:8080/api/user/login", loginData);
}
export function urlSessionCurrent() {
  return axios.get("http://localhost:8080/api/user/current");
}

// 0808 승환 회원가입 api 테스트
export function userSignUp() {
  const signUpData = {
    userId: "admin",
    password: "1234",
    userName: "admin",
    userEmail: "admin@email.com",
    gender: "male",
  };

  async function signUp(userSignUpData) {
    try {
      let response = await urlUserSignUp(userSignUpData);
      console.log("데이터 : ", response.data);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }
  signUp(signUpData);
}

// 0808 승환 로그인 테스트
export function userLogin() {
  const loginData = {
    userId: "admin",
    password: "1234",
  };

  async function login(loginData) {
    try {
      let response = await urlUserLogin(loginData);
      console.log("데이터 : ", response.data);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }
  login(loginData);
}

// 0808 승환 세션커런트 테스트
export function sessionCurrent() {
  async function currentCheck() {
    try {
      let response = await urlSessionCurrent();
      console.log("데이터 : ", response.data);
    } catch (error) {
      console.log("에러 : ", error);
    }
  }
  currentCheck();
}
