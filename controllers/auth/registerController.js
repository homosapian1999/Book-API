import { hashPassword } from "../../helpers/authHelper.js";
import User from "../../models/User.js";

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Enter details",
      });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(409).send({
        success: false,
        message: "email already in use",
      });
    }

    const updatedPassword = await hashPassword(password);

    const newUser = await User.create({
      name,
      email,
      password: updatedPassword,
    });

    return res.status(201).send({
      success: true,
      message: "User registered successfully",
      newUser,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Error in register controller",
    });
  }
};

export default registerController;
