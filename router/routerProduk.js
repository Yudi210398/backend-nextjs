import express from "express";
import { getData } from "../components/componetProduk.js";
const routerProduks = express.Router();

routerProduks.get("/", getData);

export default routerProduks;
