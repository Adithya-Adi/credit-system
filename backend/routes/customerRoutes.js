import express from "express";
import {
  addCustomerController,
  getAllCustomersController,
  updateCreditToCustomerController,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/addCustomer", addCustomerController);
router.get("/getAllCustomer", getAllCustomersController);
router.get("/updateCredit", updateCreditToCustomerController);

export default router;