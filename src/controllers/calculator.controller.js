import { computeChargePlan } from "../services/calculator.service.js";
export async function calculate(req, res, next) {
  try {
    const plan = computeChargePlan(req.body);
    res.json(plan);
  } catch (err) {
    next(err);
  }
}