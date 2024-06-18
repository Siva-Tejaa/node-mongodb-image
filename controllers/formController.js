const Form = require("../models/formModel");

const getFormData = async (req, res) => {
  try {
    const forms = await Form.find();
    // Convert image data to base64
    const formattedForms = forms.map((form) => ({
      ...form._doc,
      profilePhoto: form.profilePhoto
        ? `data:${
            form.profilePhoto.contentType
          };base64,${form.profilePhoto.data.toString("base64")}`
        : null,
    }));

    res.status(200).json(formattedForms);
  } catch (error) {
    console.error("There was an error getting the form data:", error);
    res.status(500).send("There was an error getting the form data.");
  }
};

const saveFormData = async (req, res) => {
  try {
    const { fullName } = req.body;
    const profilePhoto = req.file;

    const newForm = new Form({
      fullName,
      profilePhoto: {
        data: profilePhoto.buffer,
        contentType: profilePhoto.mimetype,
      },
    });

    await newForm.save();
    res.status(201).send("Form data saved successfully!");
  } catch (error) {
    console.error("There was an error saving the form data:", error);
    res.status(500).send("There was an error saving the form data.");
  }
};

const deleteSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    await Form.findByIdAndDelete(id);
    res.status(200).send("Form data deleted successfully!");
  } catch (error) {
    console.error("There was an error deleting the form data:", error);
    res.status(500).send("There was an error deleting the form data.");
  }
};

module.exports = { getFormData, saveFormData, deleteSingleData };
