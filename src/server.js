import express from "express";
import morgan from "morgan";

// TODO: env 파일로 빼기
const PORT = 3000;
const NODE_ENV = "dev";

const app = express();
const loggerMiddleware = NODE_ENV === "dev" ? morgan("dev") : morgan("common");

const handleHome = (req, res) => {
  return res.send("home");
};

const handleLogin = (req, res) => {
  return res.send("login");
};

app.use(loggerMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`✅ Server listening on port ${PORT}!`);
};
app.listen(PORT, handleListening);
