import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
      match: [/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces"],
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9",
      ],
    },
    address: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
  {
    Collection: "contacts",
  }
);

const ContactModel = mongoose.model("contacts", contactSchema);
export default ContactModel;
