import ContactModel from "../Models/contact.js";

const contactGET = async (req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default contactGET;
