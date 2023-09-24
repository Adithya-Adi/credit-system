import {
  addCustomer,
  getAllCustomers,
  updateCreditToCustomer,
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

export const updateCreditToCustomerController = async (req, res) => {
  try {
    const result = await updateCreditToCustomer(req.body);
    res
      .status(result.status)
      .json({ message: result.message, data: result.data });
  } catch (err) {
    res
      .status(500)
      .json({ message: "An error occurred while updating customer credit" });
  }
};
