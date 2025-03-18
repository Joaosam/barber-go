import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  const localDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getUTCDate()
  );

  return format(localDate, "d 'de' MMMM", { locale: ptBR });
}
