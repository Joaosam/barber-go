import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

interface UserBarbershopProps {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  image: string;
}

export function useBarbershop() {
  return useQuery<UserBarbershopProps[]>({
    queryKey: ["barbershop"],
    queryFn: async () => {
      const response = await api.get("/barbershop/list");
      return response.data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
