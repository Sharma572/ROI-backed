import { hhmmAddMinutes, parseHHMM } from "../utils/time.js";
export function computeChargePlan(input) {
  const { mode, power_w, current_a, voltage_v, actual_soc, desired_soc, capacity_kwh, soh_pct = 100, start_time } = input;
  let watts;
  if (mode === "power") watts = power_w;
  else if (mode === "iv") watts = current_a * voltage_v;
  else throw new Error("Invalid mode");
  if (watts <= 0) throw new Error("Power must be > 0");
  if (desired_soc < actual_soc) throw new Error("desired_soc must be >= actual_soc");
  const effectiveCapacity = capacity_kwh * (soh_pct / 100);
  const socDelta = (desired_soc - actual_soc) / 100;
  const energy_kwh = effectiveCapacity * socDelta;
  const hours = energy_kwh / (watts / 1000);
  const minutes = Math.round(hours * 60);
  return {
    inputs: { mode, power_w: Math.round(watts), actual_soc, desired_soc, capacity_kwh, soh_pct, start_time: start_time ?? null },
    outputs: {
      energy_kwh: round(energy_kwh, 3),
      duration_minutes: minutes,
      duration_hhmm: toHHMM(minutes),
      end_time: start_time ? hhmmAddMinutes(parseHHMM(start_time), minutes) : null
    }
  };
}
function toHHMM(totalMinutes) {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function round(n, d = 2) {
  const f = Math.pow(10, d);
  return Math.round(n * f) / f;
}
