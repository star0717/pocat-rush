import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function urlGetAllAuthority() {
  return axios.get("http://localhost:8080/api/authority/all");
}
export function urlGetAllUser() {
  return axios.get("http://localhost:8080/api/user/all");
}
export function urlUserSignUp(signUpData) {
  return axios.post("http://localhost:8080/api/user/signup", signUpData);
}
// export function urlUserLogin(loginData) {
//   return axios.post("http://localhost:8080/api/user/login", loginData);
// }
export function urlSessionCurrent(header) {
  return axios.get("http://localhost:8080/api/user/current", header);
}
export function urlJwtLogin(loginData) {
  return axios.post("http://localhost:8080/api/authenticate", loginData);
}

// 0808 승환 회원가입 api 테스트
export function userSignUp(signUpData) {
  if (window.confirm("회원가입 하시겠습니까?")) {
    async function signUp(signUpData) {
      try {
        let response = await urlUserSignUp(signUpData);
        console.log("데이터 : ", response.data);
      } catch (error) {
        console.log("에러 : ", error);
      }
    }
    signUp(signUpData);
  }
  return <></>;
}

// 0808 승환 로그인 테스트 (토큰로그인 사용으로 이 코드는 안씀니다)
// export function userLogin() {
//   const loginData = {
//     userId: "admin",
//     password: "1234",
//   };

//   async function login(loginData) {
//     try {
//       let response = await urlUserLogin(loginData);
//       console.log("데이터 : ", response.data);
//     } catch (error) {
//       console.log("에러 : ", error);
//     }
//   }
//   login(loginData);

//   return <></>;
// }

// 0809 승환 jwt 토큰 로그인 테스트
export function userJwtLogin(loginData) {
  async function getToken() {
    let tokenData = localStorage.getItem("JWT-token");
    if (!tokenData) {
      try {
        let response = await urlJwtLogin(loginData);
        console.log("데이터 : ", response.data);

        localStorage.setItem("JWT-token", response.data.data.token);
      } catch (error) {
        console.log("에러 : ", error);
      }
    }
  }
  getToken();
  return <></>;
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
    localStorage.removeItem("JWT-token");
    console.log("JWT-token 삭제 완료");
  }

  return <></>;
}
