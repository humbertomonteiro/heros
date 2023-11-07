import axios from "axios";

const url = "http://homologacao3.azapfy.com.br/api/ps/metahumans";
const httpsUrl = url.replace("/^http:/", "https:");

const api = axios.create({
  baseURL: httpsUrl,
});

export { api };
