import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
const port = 8000;
import routerProduks from "./router/routerProduk.js";
const app = express();

(async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    next();
  });

  app.use("/api", routerProduks);

  await mongoose.connect(
    "mongodb://runatyudi:kawasanrokok1998@cluster0-shard-00-00.oaqmd.mongodb.net:27017,cluster0-shard-00-01.oaqmd.mongodb.net:27017,cluster0-shard-00-02.oaqmd.mongodb.net:27017/backendNextJs?ssl=true&replicaSet=atlas-myi90d-shard-0&authSource=admin&retryWrites=true&w=majority"
  );

  await app.listen(port, () => console.log("listening for requests"));
})();
