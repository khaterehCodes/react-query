import axios from "axios";

const base_url: string = "https://jsonplaceholder.typicode.com";
export const api = axios.create({
  baseURL: base_url,
});
