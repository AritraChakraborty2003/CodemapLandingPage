import ContactModel from "../Models/contact.js";

const contactPOST = () => {
  return async (req, res) => {
    try {
      console.log(req.body);
      const newContact = new ContactModel(req.body);
      const result = await newContact.save();
      res.status(201).json(result);
    } catch (error) {
      res
        .status(400)
        .send({ message: error.message, error: "Invalid database entries!!!" });
    }
  };
};

export default contactPOST;
