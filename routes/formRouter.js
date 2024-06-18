const express = require("express");
const router = express.Router();

//Controllers
const {
  getFormData,
  saveFormData,
  deleteSingleData,
} = require("../controllers/formController");

//Multer
const multer = require("multer");

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", getFormData);

router.post("/", upload.single("profilePhoto"), saveFormData);

router.delete("/:id", deleteSingleData);

module.exports = router;
