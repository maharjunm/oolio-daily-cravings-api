import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Express.js API!");
});

app.get("/api/products", async (req: Request, res: Response<any>) => {
  const response = await axios.get(
    "https://orderfoodonline.deno.dev/api/product"
  );
  const producs = response.data; // The data is in response.data
  res.json(producs);
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
