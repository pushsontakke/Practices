const express = require("express");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth.routes.js");
const connectToMongoDB = require("./db/connectToMongoDB.js");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("hello from server!");
// });

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
