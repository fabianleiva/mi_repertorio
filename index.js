import express from "express";
import cors from "cors";

import routes from "./routes/routes.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server on! --> http://localhost:${PORT}`);
});