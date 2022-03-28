import express from 'express';
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import specs from "./swagger.js";
import cors from "cors";
import router from "./shared/routes.js";
import config from './swagger.js';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(config));

app.use("/", router);

app.listen(3001, () => {
  console.log("Server is working");
});

export default app;
