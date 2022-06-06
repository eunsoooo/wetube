import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// TODO: env 파일로 빼기
const PORT = 3000;

const app = express();
const loggerMiddleware = morgan("common");

app.use(loggerMiddleware);
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => {
  console.log(`✅ Server listening on port ${PORT}!`);
};
app.listen(PORT, handleListening);
