import { validateBarbershopFields } from "../middleware/barbershop.middlware.js";
import {
  getBarbershops,
  createBarbershop,
} from "../controllers/barbershop.controller.js";
import { Router } from "express";

const router = Router();

router.get("/list", getBarbershops);
router.post("/create", validateBarbershopFields, createBarbershop);

export default router;
