import Admin from "../modals/Admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (userData) => {
  try {
    const existingUser = await Admin.findOne({
      $or: [{ email: userData.email }, { phoneNumber: userData.phoneNumber }],
    });
    if (!existingUser) {
      const hashedPassword = bcrypt.hashSync(userData.password, 5);
      const newUser = new Admin({
        ...userData,
        password: hashedPassword,
      });
      await newUser.save();

      return {
        status: 200,
        message: "SignUp Successful",
        data: newUser,
      };
    } else {
      return {
        status: 409,
        message: "User already exists",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err.message || "Internal server error",
    };
  }
};

export const signIn = async (emailMobile, password) => {
  try {
    const existingUser = await Admin.findOne({
      $or: [{ email: emailMobile }, { phoneNumber: emailMobile }],
    });

    if (!existingUser) {
      return {
        status: 401,
        message: "User not found",
      };
    }
    const isPasswordValid = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordValid) {
      return {
        status: 401,
        message: "Invalid password",
      };
    }
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    existingUser.password = undefined;
    return {
      status: 200,
      message: "Successfully signed in",
      data: existingUser,
      token: token,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err.message || "Internal server error",
    };
  }
};
