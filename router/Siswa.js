const express = require("express");
const router = express.Router();
const {
  testMethod,
  createStudent,
  getAllStudent,
  getOneStudent,
  deleteStudent,
  updateStudent,
} = require("../controllers/Siswa");

router.get("/test", testMethod);
router.post("/siswa", createStudent);
router.get("/siswa", getAllStudent);
router.get("/siswa/:id", getOneStudent);
router.delete("/siswa/:id", deleteStudent);
router.put("/siswa/:id", updateStudent);

module.exports = router;
