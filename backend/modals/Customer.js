import mongoose from "mongoose";

const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;