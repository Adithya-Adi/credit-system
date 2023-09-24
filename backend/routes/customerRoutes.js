import express from "express";
import {
  addCustomerController,
  getAllCustomersController,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/addCustomer", addCustomerController);
router.get("/getAllCustomer", getAllCustomersController);

export default router;