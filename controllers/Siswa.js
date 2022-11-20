const Siswa = require("../models/Siswa");
const mongoose = require("mongoose");

const testMethod = (req, res) => {
  res.status(200).json({
    message: "Happy Coding!",
  });
};

const createStudent = async (req, res) => {
  try {
    const { nama, jurusan, kelas } = req.body;
    const checkUser = await Siswa.findOne({ nama, jurusan, kelas });
    if (checkUser) {
      return res.status(302).json({ message: "Siswa sudah tersedia!" });
    }

    const student = await Siswa.create({ nama, jurusan, kelas });
    res.status(200).json({
      message: "Siswa created!",
      student,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllStudent = async (req, res) => {
  try {
    const student = await Siswa.find({});
    res.json({
      student,
    });
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

const getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Id not valid!" });
    }
    const student = await Siswa.findById(id);

    if (!student) {
      return res.status(404).json({ message: "Siswa not found!" });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Siswa not found!" });
    }

    const student = await Siswa.deleteOne({ _id: id });
    if (!student) {
      return res.status(404).json({ message: "Siswa not found!" });
    }

    res.status(200).json({ message: "Deleted!" });
  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Student not found!" });
    }

    const student = await Siswa.findByIdAndUpdate({ _id: id }, { ...req.body });
    if (!student) {
      return res.status(404).json({ message: "Siswa not found!" });
    }

    res.status(200).json({ message: "Updated!" });
  } catch (error) {}
};

module.exports = {
  testMethod,
  createStudent,
  getAllStudent,
  getOneStudent,
  deleteStudent,
  updateStudent,
};
