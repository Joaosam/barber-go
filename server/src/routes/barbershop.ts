import { getBarbershops } from "../controllers/barbershop.controller.js";
import { Router } from "express";

const router = Router();

router.get("/list", getBarbershops);

export default router;
