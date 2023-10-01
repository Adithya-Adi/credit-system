
import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import Select from "react-select";
// core components
// import UserHeader from "components/Headers/UserHeader.js";
import Header from "components/Headers/Header.js";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { environment } from "../../environment/environment";
const baseUrl = environment.baseUrl;
const AddCredit = () => {
  useEffect(() => {
    const getAllCustomer = async () => {
      const { data: response } = await axios.get(`${baseUrl}/api/customer/getAllCustomer`);
      const customerData = response.data;
      const options = customerData.map((customer) => ({
        value: customer._id,
        label: customer.fullName,
      }));
      setCustomerOptions(options);
    }
    getAllCustomer();
  }, [])
  const [creditType, setCreditType] = useState("Add Credit");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customerOptions, setCustomerOptions] = useState([]);
  const [amount, setAmount] = useState("");

  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!token || !userData) {
    return <Navigate to="/auth/login" replace />;
  }

  const handleCreditChange = (e) => {
    setCreditType(e.target.value);
  };

  const handleCustomerChange = (selectedOption) => {
    setSelectedCustomer(selectedOption);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        customerId: selectedCustomer ? selectedCustomer.value : null,
        adminId: userData._id,
        amount: parseInt(amount),
        status: creditType,
      };
      const { data: response } = await axios.put(`${baseUrl}/api/customer/updateCredit`, requestData);
      if (response.message === "Credit added successfully") {
        alert("Credit updated");
      } else if (response.message === "Insufficient balance") {
        alert("Insufficient Balance");
      } else {
        alert("Failed");
      }
    } catch (error) {
      alert("Failed");
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Update Credit</h3>
                  </Col>
                  <Col className="text-right" xs="4">

                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h6 className="heading-small text-muted mb-4">
                    Credit information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Customer Name
                          </label>
                          <Select
                            id="customer-name"
                            options={customerOptions}
                            value={selectedCustomer}
                            onChange={handleCustomerChange}
                            isSearchable
                            placeholder="Select a customer"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">

                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Amount
                          </label>
                          <Input
                            className="form-control-alternative"
                            placeholder="Enter Amount"
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="credit-type"
                          >
                            Credit
                          </label>
                          <Input
                            type="select"
                            className="form-control-alternative"
                            id="credit-type"
                            onChange={handleCreditChange}
                            value={creditType}
                          >
                            <option value="Add Credit">Add credit</option>
                            <option value="Credit Paid">Credit Received</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <Button
                    color="success"
                    type="submit"
                    size="sm"
                  >
                    Save
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddCredit;
