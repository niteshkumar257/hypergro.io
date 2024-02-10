import express from "express";
import dotenv from "dotenv";
import connectDb from "./Db/index.js";
import userRouter from "./routes/userRouter.js";
import stockRouter from "./routes/stockRouter.js";
import fs from "fs";
import { parse } from "csv-parse";
import {Stock} from "./Models/user.models.js";

import cors from "cors";

// write script here

const processFile = async () => {
  const records = [];
  const parser = fs.createReadStream("./files/EQ120124.CSV").pipe(
    parse({
      // CSV options if any
    })
  );
  for await (const record of parser) {
    // Work with each record
    const newStock=new Stock({
      code:record[0],
      name:record[1],
      open:record[4],
      high:record[5],
      low:record[6],
      close:record[7]
    })
    await newStock.save();
    records.push(record);
  }
  return records;
};

(async () => {
  const records = await processFile();
  console.info(records);
})();

//

dotenv.config({
  path: "./env",
});

// console.log("nitesh  kumar");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/stock", stockRouter);

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("server Started", port);
    });
  })
  .catch((err) => {
    console.log("Server unable to connect with Db");
  });
