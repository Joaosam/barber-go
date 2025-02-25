import { db } from "../lib/prisma.js";

export const gracefulShutdown = async () => {
  try {
    await db.$disconnect();
    console.log("Conexão com o banco encerrada com sucesso.");
  } catch (err) {
    console.error("Erro ao desconectar do banco", err);
  } finally {
    process.exit(0);
  }
};
