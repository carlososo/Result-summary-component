import axios from "axios";

export const axiosGetter = axios.create({
  baseURL: "/src/assets/data.json",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});