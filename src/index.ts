import express, { Application } from "express";

const app: Application = express();

const PORT = 2090;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
