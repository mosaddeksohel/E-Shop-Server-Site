const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection is Successful"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/api/test", () => {
  console.log("test is successful");
});
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(port, () =>
  console.log(`Backend Server is running on port ${port}!`)
);
