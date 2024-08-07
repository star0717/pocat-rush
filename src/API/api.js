import axios from "axios";

export function urlGetAllAuthority() {
  return axios.get("http://localhost:8080/api/authority/all");
}

export function urlGetAllUser() {
  return axios.get("http://localhost:8080/api/user/all");
}
