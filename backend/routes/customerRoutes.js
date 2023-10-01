import express from "express";
import {
  addCustomerController,
  getAllCustomersController,
  updateCreditToCustomerController,
  getCreditAmountForCustomerController
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/addCustomer", addCustomerController);
router.get("/getAllCustomer", getAllCustomersController);
router.put("/updateCredit", updateCreditToCustomerController);
router.get("/getCredits/:customerId", getCreditAmountForCustomerController);

export default router;