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

interface OrderItem {
  productId: string;
  quantity: number;
}

interface OrderRequest {
  items: OrderItem[];
  couponCode: string;
}

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

app.post("/api/order", async (req: any, res: any) => {
  const { items, couponCode } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ message: "Order details missing." });
  }
  const response = await axios.post(
    "https://orderfoodonline.deno.dev/api/order",
    {
      items,
      couponCode,
    }
  );
  // const producs = response.data; // The data is in response.dat

  res.status(201).json({
    message: "Order received successfully!",
    orderId: response.data.id,
  });
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
