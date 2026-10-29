import express from "express";
import campeonato from "./campeonato.js";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta) => {
  resposta.send(campeonato);
});

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));
