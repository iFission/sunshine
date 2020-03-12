const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Import MongoDB
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true })
  .then(() => console.log("🔥  MongoDB Connected..."))
  .catch(err => console.log(err));

//...
// Your Routes
app.use("/admin", require("./admin"));

//...

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔥  Server started on PORT: ${PORT}`);
});
