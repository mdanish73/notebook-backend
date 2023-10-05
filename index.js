const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const notebookRoute = require("./routes/notebook");

dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.static("public"));
app.use("/api", notebookRoute);


const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("conect to db"))
  .catch((error) => console.log(error));

// app.get("/test", async (req, res) => {
//   res.send("test is clear");
// });

app.listen(process.env.PORT_NO, () => {
  console.log("server running on port");
});
