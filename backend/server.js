import express from "express";
// import products from "./data/products.js";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
// const  = require("");
import bodyparser from "body-parser";

const app = express();
dotenv.config();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Running ");
});
app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHandler);
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id == req.params.id);
//   res.json(product);
// });

connectDB();

app.listen(PORT, console.log(`server started at ${PORT}`.cyan.underline));
