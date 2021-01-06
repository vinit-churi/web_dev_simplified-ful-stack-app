require("dotenv").config;
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routers/index");
// import dotenv from "dotenv";
// dotenv.config();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.set(expressLayouts);
app.use(express.static("public"));

// const mongoose = require("mongoose");
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connect();
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to Mongoose"));
// console.log(process.env.DATABASE_URL);
// console.log(process.env.DATABASE_URL);
// console.log(require("dotenv").config());

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
