import express from "express";
import barbershopRoutes from "./routes/barbershop.js";
import { gracefulShutdown } from "./utils/gracefulShutdown.js";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use("/barbershop", barbershopRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

["SIGINT", "SIGTERM"].forEach((signal: string) => {
  process.on(signal as NodeJS.Signals, gracefulShutdown);
});
