import express from "express";
import { PORT, BASE_URL } from "./config/index.js";
import userRoute from "./routes/user.route.js";
const app = express();

app.use('/user',userRoute);

app.listen(PORT, () => {
  console.log(`App is listening on ${BASE_URL}`);
});
