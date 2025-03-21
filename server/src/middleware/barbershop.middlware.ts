import { Request, Response, NextFunction } from "express";

export function validateBarbershopFields(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const requiredFields = ["name", "address", "city", "state", "image"];
  const missingFields = requiredFields.filter((field) => !req.body[field]);

  if (missingFields.length > 0) {
    res.status(400).json({
      error: "Missing fields",
      missingFields,
    });
    return;
  }

  next();
}
