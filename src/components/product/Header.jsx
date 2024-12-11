import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import logo from "/src/assets/jaihanuman.jpeg";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './Header.css';
import { Box } from "@chakra-ui/layout";

const Header = () => {






  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">Hidden brand</a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-6 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    </>
  );
};
export default Header;

{
  /**
const [isHovering, setIsHovering] = useState(false);
const handleMouseOver = () => {
    setIsHovering(true);
  };

const handleMouseOut = () => {
    setIsHovering(false);
  };


onMouseOver={handleMouseOver}
                                                                onMouseOut={handleMouseOut} />
 {isHovering &&   return (
   <div>
                                                                                            <h2>arpanbagsproduct.com</h2>
                                                                                          </div>
                                                                                        );}

  <Container fluid>
        <Row classNameNameName="justify-content-center">
          <Col sm={10} md={4} lg={4}>
            <Card>
              <Card.Img variant="top" src={logo} alt="Jai Hanuman !!" />
            </Card>
          </Col>
          <Col xs sm="1">
            <NavLink  to="/register"><Button variant="success">Register</Button></NavLink>
          </Col>
          <Col xs sm="1">
            <NavLink  to="/login"><Button variant="warning">Logout</Button></NavLink>
          </Col>
        </Row>
      </Container>
      <div>
        <Alert key="success" variant="success">
          <h3>
            {" "}
            Welcome to Arpan Bags Services !! We are happy to help you
            desperately !!{" "}
          </h3>
        </Alert>
      </div>

 */
}
