// import express from "express";
// import morgan from "morgan";
// import calculatorRouter from "./routes/calculator.routes.js";
// import errorHandler from "./middlewares/errorHandler.js";
// import investmentRouter from "./routes/investment.routes.js";
// const cors = require("cors");
// const app = express();
// app.use(express.json());
// app.use(morgan("dev"));
// app.get("/health", (_req, res) => res.json({ ok: true }));
// app.use("/api/v1/calculator", calculatorRouter);
// app.use("/api/v1/investments", investmentRouter);
// app.use((req, res) => res.status(404).json({ error: "Not Found" }));
// app.use(errorHandler);
// export default app;
import express from "express";
import morgan from "morgan";
import cors from "cors"; // ✅ add this
import calculatorRouter from "./routes/calculator.routes.js";
import errorHandler from "./middlewares/errorHandler.js";
import investmentRouter from "./routes/investment.routes.js";

const app = express();

// ✅ Enable CORS (allow all for now — tighten later if needed)
app.use(cors());

// ✅ If you want to restrict specific frontend domain:
// app.use(cors({ origin: "http://localhost:3000" })); // or your deployed URL

app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/v1/calculator", calculatorRouter);
app.use("/api/v1/investments", investmentRouter);

app.use((req, res) => res.status(404).json({ error: "Not Found" }));
app.use(errorHandler);

export default app;
