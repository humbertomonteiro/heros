import axios from "axios";
const url = "http://homologacao3.azapfy.com.br/api/ps/metahumans";

const api = axios.create({
  baseURL: url,
});

export default api;
