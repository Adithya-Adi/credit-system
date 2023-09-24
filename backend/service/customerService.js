import Customer from "../modals/Customer.js";
import Credit from "../modals/Credit.js";

export const addCustomer = async (customerData) => {
  try {
    const existingCustomer = await Customer.findOne({
      fullName: customerData.fullName,
    });
    if (existingCustomer) {
      return {
        status: 200,
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

export const updateCreditToCustomer = async (creditData) => {
  try {
    const customer = await Customer.findById(creditData.customerId);

    if (!customer) {
      return {
        status: 404,
        message: "Customer not found",
      };
    }

    const newCredit = new Credit({
      customerId: customer._id,
      ...creditData
    });

    await newCredit.save();
    if (creditData.status === "Add Credit") {
      customer.balance += creditData.amount;
    }
    if(creditData.status === "Credit Paid") {
      customer.balance -= creditData.amount;
    }

    await customer.save();

    return {
      status: 200,
      message: "Credit added successfully",
      data: newCredit,
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};

// export const getCreditAmountForCustomer = async (customerId) => {
//   try {
//     const customer = await Customer.findById(customerId);

//     if (!customer) {
//       return {
//         status: 404,
//         message: "Customer not found",
//       };
//     }

//     const credits = await Credit.find({customerId: customerId});

//     return {
//       status: 200,
//       message: "Total credit amount retrieved successfully",
//       data: {
//         customerId: customer._id,
//         fullName: customer.fullName,
//         totalCreditAmount: ,
//       },
//     };
//   } catch (err) {
//     console.error(err);
//     return {
//       status: 500,
//       message: "Internal server error",
//     };
//   }
// };
