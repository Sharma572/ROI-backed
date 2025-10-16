import request from "supertest";
import app from "../src/app.js";
describe("Calculator API", () => {
  test("power mode computes energy", async () => {
    const res = await request(app).post("/api/v1/calculator/calculate").send({
      mode: "power", power_w: 7400, actual_soc: 20, desired_soc: 80, capacity_kwh: 60, soh_pct: 95, start_time: "09:30"
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.outputs.energy_kwh).toBeGreaterThan(0);
  });
});