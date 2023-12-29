const express =require ("express");
const path =require ("path");
const mongoose =require ("mongoose");
const cors =require ("cors");
const dotenv =require ("dotenv");
const productRouter =require ("./Routes/productRoutes");
const userRouter =require ("./Routes/userRoutes");
const orderRouter =require ("./Routes/orderRoute");
const reportRouter =require ("./Routes/reportModal");
const expenseRouter =require ("./Routes/expense");
const uploadRouter =require ("./Routes/uploadRoutes");
const specialRouter =require ("./Routes/special");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("/api/keys/google", (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

//app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/report", reportRouter);
app.use("/api/expense", expenseRouter);
app.use("/api/special", specialRouter);


app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

 path.resolve();
app.use(express.static(path.join(__dirname, "/store/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/store/build/index.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


app.listen(process.env.PORT || 8358, () => {
  console.log(`serve at http://localhost`);
});
//

module.exports = { app };
