import axios from "axios";

const URL =
  "https://devcenter.heroku.com/changelog-items/1815/http://homologacao3.azapfy.com.br/api/ps/metahumans";

const api = axios.create({
  baseURL: URL,
});

export { api };
