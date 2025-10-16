import Joi from "joi";
export const calculatorSchema = Joi.object({
  mode: Joi.string().valid("power", "iv").required(),
  power_w: Joi.number().positive().when("mode", { is: "power", then: Joi.required(), otherwise: Joi.forbidden() }),
  current_a: Joi.number().positive().when("mode", { is: "iv", then: Joi.required(), otherwise: Joi.forbidden() }),
  voltage_v: Joi.number().positive().when("mode", { is: "iv", then: Joi.required(), otherwise: Joi.forbidden() }),
  actual_soc: Joi.number().min(0).max(100).required(),
  desired_soc: Joi.number().min(0).max(100).required(),
  capacity_kwh: Joi.number().positive().required(),
  soh_pct: Joi.number().min(0).max(100).default(100),
  start_time: Joi.string().pattern(/^\d{2}:\d{2}$/).optional()
});