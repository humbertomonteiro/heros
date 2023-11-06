import axios from "axios";

const URL =
  "https://cors-everywhere.herokuapp.com/http://homologacao3.azapfy.com.br/api/ps/metahumans";

const api = axios.create({
  baseURL: URL,
});

export { api };
