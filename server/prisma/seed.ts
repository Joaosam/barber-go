import { PrismaClient } from "@prisma/client";

const barbershops = [
  {
    name: "Barbearia Vintage",
    image: "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
  },
  {
    name: "Cortes & Cia",
    image: "https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png",
    address: "Avenida Paulista, 1000",
    city: "São Paulo",
    state: "SP",
  },
  {
    name: "Barba Negra",
    image: "https://utfs.io/f/5832df58-cfd7-4b3f-b102-42b7e150ced2-16r.png",
    address: "Rua Augusta, 789",
    city: "São Paulo",
    state: "SP",
  },
  {
    name: "Barbearia Tradicional",
    image: "https://utfs.io/f/7e309eaa-d722-465b-b8b6-76217404a3d3-16s.png",
    address: "Rua da Consolação, 456",
    city: "São Paulo",
    state: "SP",
  },
  {
    name: "Vintage Barber",
    image: "https://utfs.io/f/178da6b6-6f9a-424a-be9d-a2feb476eb36-16t.png",
    address: "Rua Oscar Freire, 234",
    city: "São Paulo",
    state: "SP",
  },
];

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

async function seedDB() {
  try {
    for (const shop of barbershops) {
      await prisma.barberShop.create({
        data: {
          name: shop.name,
          image: shop.image,
          address: shop.address,
          city: shop.city,
          state: shop.state,
        },
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDB();
