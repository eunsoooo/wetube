import express from "express";

const PORT = 3000;  // TODO: env 파일로 빼기
const app = express();
const handleListening = () => {
  console.log(`✅ Server listening on port ${PORT}!`);
};
app.listen(PORT, handleListening);
