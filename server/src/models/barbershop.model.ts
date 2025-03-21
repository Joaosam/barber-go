import { db } from "../lib/prisma.js";
import { BarberShop as BarberShopProps } from "@prisma/client";
import { randomUUID } from "node:crypto";

export class BarberShop {
  id: string;
  name: string;
  image: string;
  address: string;
  city: string;
  state: string;
  createdAt: Date;

  constructor(data: BarberShopProps) {
    this.id = randomUUID();
    this.name = data.name;
    this.image = data.image;
    this.address = data.address;
    this.city = data.city;
    this.state = data.state;
    this.createdAt = data.createdAt;
  }

  static async findAll() {
    return db.barberShop.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }

  static async create({
    ...data
  }: Omit<BarberShopProps, "id" | "createdAt" | "updatedAt">) {
    return db.barberShop.create({
      data: {
        id: randomUUID(),
        ...data,
        createdAt: new Date(),
      },
    });
  }
}
