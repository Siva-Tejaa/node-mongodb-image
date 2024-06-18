const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    profilePhoto: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const Form = mongoose.model("form", formSchema);

module.exports = Form;
