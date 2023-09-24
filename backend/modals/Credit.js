import mongoose from "mongoose";

const { Schema } = mongoose;

const creditSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'Customer',
      required: true
    },
    adminId: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Credit = mongoose.model("Credit", creditSchema);

export default Credit;