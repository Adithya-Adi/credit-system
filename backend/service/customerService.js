import Customer from "../modals/Customer.js";
import Credit from "../modals/Credit.js";

export const addCustomer = async (customerData) => {
  try {
    const existingCustomer = await Customer.findOne({
      fullName: customerData.fullName,
    });
    if (existingCustomer) {
      return {
        status: 409,
        message: "Customer with the same name already exists",
      };
    }
    const newCustomer = new Customer({
      ...customerData,
    });
    await newCustomer.save();
    return {
      status: 200,
      message: "Customer details added successfully",
      data: newCustomer,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err,
    };
  }
};

export const getAllCustomers = async () => {
  try {
    const customerData = await Customer.find();
    if (customerData.length === 0) {
      return {
        status: 200,
        message: "No Customer Found",
      };
    }
    
    return {
      status: 200,
      message: "Customer details retrieved successfully",
      data: customerData,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 500,
      message: err,
    };
  }
};