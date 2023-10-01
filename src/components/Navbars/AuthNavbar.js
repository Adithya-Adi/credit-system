import { Link } from "react-router-dom";
import {
  NavbarBrand,
  Navbar,
  Container,
  Row,
  Col,
} from "reactstrap";

const AdminNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={require("../../assets/img/brand/Indian_Oil_Logo.svg.png")}
            />
            <span style={{ marginLeft: '30px' }}>Shri Vaishnavi Fuels</span>
          </NavbarBrand>

          <div className="navbar-collapse-header d-md-none">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img
                    alt="..."
                    src={require("../../assets/img/brand/argon-react.png")}
                  />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button className="navbar-toggler" id="navbar-collapse-main">
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
