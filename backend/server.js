import express from "express";
import cors from "cors";
 
import alunoRoutes from "./routes/alunoRoutes";
import professorRoutes from "./routes/professorRoutes";
import disciplinaRoutes from "./routes/diciplinasRoutes";
import matriculaRoutes from "./routes/matriculasRoutes";
import notaRoutes from "./routes/notaRoutes";
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
app.use("/alunos", alunoRoutes);
app.use("/professores", professorRoutes);
app.use("/disciplinas", disciplinaRoutes);
app.use("/matriculas", matriculaRoutes);
app.use("/notas", notaRoutes);
 
app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "API do Sistema Escolar funcionando!"
  });
});
 
const PORT = 3000;
 
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
 
