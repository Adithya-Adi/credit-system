import {
  addCustomer,
  getAllCustomers,
} from "../service/customerService.js";

export const addCustomerController = async (req, res) => {
  try {
    const result = await addCustomer(req.body);
    res
      .status(result.status)
      .json({ message: result.message, data: result.data });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while adding customer details" });
  }
};

export const getAllCustomersController = async (req, res) => {
  try {
    const result = await getAllCustomers();
    res
      .status(result.status)
      .json({ message: result.message, data: result.data });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while adding cab details" });
  }
};