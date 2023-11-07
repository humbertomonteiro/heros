import axios from "axios";

const URL = "http://homologacao3.azapfy.com.br/api/ps/metahumans";

const api = axios.create({
  baseURL: URL,
});

export { api };
