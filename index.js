const express = require("express");
const app = express();
const cors = require("cors");

//DB Connection
const connectDB = require("./config/dbConnection");

//Importing Routes
const formRouter = require("./routes/formRouter");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use("/form", formRouter);

const port = 8000;
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is Running on port ${port}...`);
});
