import express from "express";
import cors from "cors";
import ListRoute from "./routes/ListRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(ListRoute);

app.listen(8000, () => {
  console.log("Server Online");
});
