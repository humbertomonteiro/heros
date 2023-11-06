import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
const port = 3333;

const apiProxy = createProxyMiddleware("/api", {
  target: "http://homologacao3.azapfy.com.br",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "/api/ps/metahumans",
  },
});

app.use("/api", apiProxy);

app.listen(port, () => {
  console.log(`Servidor intermediário rodando na porta ${port}`);
});
