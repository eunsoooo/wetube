import express from "express";
import res from "express/lib/response";

const PORT = 3000;  // TODO: env 파일로 빼기

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("home");
};

const handleLogin = (req, res) => {
  return res.send("login");
};

app.get("/", logger, handleHome);

app.get("/login", logger, handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port ${PORT}!`);
};
app.listen(PORT, handleListening);
