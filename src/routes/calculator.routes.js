import { Router } from "express";
import { calculate } from "../controllers/calculator.controller.js";
import { validate } from "../middlewares/validate.js";
import { calculatorSchema } from "../schemas/calculator.schema.js";
const router = Router();
router.post("/calculate", validate(calculatorSchema), calculate);
export default router;