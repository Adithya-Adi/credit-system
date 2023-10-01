import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { environment } from "../../environment/environment";

const baseUrl = environment.baseUrl;

const ViewCustomer = () => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCustomerData, setFilteredCustomerData] = useState([]);
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("userData");

  useEffect(() => {
    const getAllCustomer = async () => {
      const { data: response } = await axios.get(
        `${baseUrl}/api/customer/getAllCustomer`
      );
      setCustomerData(response.data);
      setFilteredCustomerData(response.data); // Initialize filtered data with all customers
    };
    getAllCustomer();
  }, []);

  if (!token || !userData) {
    return <Navigate to="/auth/login" replace />;
  }

  const handleSearch = () => {
    const filteredCustomers = customerData.filter((customer) =>
      customer.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCustomerData(filteredCustomers);
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">View Customer</h3>
                <InputGroup className="ml-auto" style={{ maxWidth: "300px" }}>
                  <Input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <InputGroupAddon addonType="append">
                    <Button color="primary" onClick={handleSearch}>
                      Search
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Balance</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomerData.map((customer, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <Media>
                            <span className="mb-0 text-sm">
                              {customer.fullName}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>₹{customer.balance}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className={`bg-${customer.balance === 0 ? "success" : "warning"}`} />
                          {customer.balance !== 0 ? "Pending" : "Paid"}
                        </Badge>
                      </td>
                      <td>
                        <div className="avatar-group">
                          <Button
                            color="primary"
                            onClick={() =>
                              navigate(
                                `/admin/view-credit?customerId=${customer._id}&customerName=${customer.fullName}`
                              )
                            }
                            size="sm"
                          >
                            View More
                          </Button>
                          {/* <Button
                            color="danger"
                            onClick={(e) => e.preventDefault()}
                            size="sm"
                          >
                            Delete
                          </Button> */}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ViewCustomer;
