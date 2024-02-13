require("dotenv").config();
require("express-async-errors");
const cors = require("cors");
const express = require("express");
const app = express();
const cookieSession = require("cookie-session");

const errorMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");
const authRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");
const adminRouter = require('./routes/admin')
// const authMiddleware = require('./middleware/authentication')

//middleware
// app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(errorMiddleware);
// app.use(authMiddleware)
// app.use(notFoundMiddleware)

//routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href ="/api/v1/products">products routes</a>');
});
app.use("/api/v1", productsRouter, authRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/admin", adminRouter);
// app.use('/')

//products routes

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`The server is listening on port 3000....`));
  } catch (error) {
    console.log(error);
  }
};
start();
