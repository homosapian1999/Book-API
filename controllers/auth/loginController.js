import { comparePassword } from "../../helpers/authHelper.js";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(200).send({
        success: false,
        message: "Enter details",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Invalid credentials",
      });
    }

    const matchPassword = await comparePassword(password, user.password);
    if (!matchPassword) {
      return res.status(401).send({
        success: "false",
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ _id: user.name }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: "true",
      message: "Login successfully",
      user: {
        name: user.name,
      },
      token,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Error in login controller",
    });
  }
};

export default loginController;
