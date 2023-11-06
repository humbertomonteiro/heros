import axios from "axios";

const URL = "/api";

const api = axios.create({
  baseURL: URL,
});

export { api };
