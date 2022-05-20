const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
connectDB();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/users", require("./routes/api/users"));
app.get("/test", (req, res) => {
  res.json({ msg: "Welcome to the API" });
});
app.use("/api/admin", require("./routes/api/admin"));
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER STARTED ON 5000`));
