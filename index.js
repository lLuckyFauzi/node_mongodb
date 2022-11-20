const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const siswaRouter = require("./router/Siswa");

mongoose
  .connect(
    "mongodb+srv://user:user123@cluster0.tltsg18.mongodb.net/mahasiswa?retryWrites=true&w=majority"
  )
  .then(() => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(siswaRouter);

    app.listen(5000, () => [console.log(`Server is running on port: 5000`)]);
  });
