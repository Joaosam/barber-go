import { BarberShop } from "../models/barbershop.model.js";
import { Request, Response } from "express";

export async function getBarbershops(_req: Request, res: Response) {
  try {
    const barbershops = await BarberShop.findAll();
    res.send(barbershops);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar barbearias" });
  }
}

export async function createBarbershop(req: Request, res: Response) {
  try {
    const { name, address, city, state, image } = req.body;
    const barbershop = await BarberShop.create({
      name,
      address,
      city,
      state,
      image,
    });
    res.status(201).send(barbershop);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar barbearia" });
  }
}
