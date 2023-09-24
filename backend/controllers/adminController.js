import {
  signUp,
  signIn,
} from "../service/adminService.js";

export const signUpController = async (req, res) => {
  try {
    const result = await signUp(req.body);
    res
      .status(result.status)
      .json({ message: result.message, data: result.data });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while registering a user" });
  }
};

export const signInController = async (req, res) => {
  try {
    const { emailMobile, password } = req.body;
    const result = await signIn(emailMobile, password);
    res.status(result.status).json({
      message: result.message,
      data: result.data,
      token: result.token,
    });
  } catch (err) {
    res.status(500).json({ message: "An error occurred while signing in" });
  }
};