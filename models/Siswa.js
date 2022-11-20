const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const SiswaSchema = new Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    jurusan: {
      type: String,
      required: true,
    },
    kelas: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Siswa", SiswaSchema);
