import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import {registerAPI} from '/src/services/AuthService';



const RegisterComponent = () => {

 const navigator = useNavigate();

 const rolesList = [
   'ROLE_ADMIN',
   'ROLE_SUPERADMIN',
   'ROLE_USER',
   'ROLE_CUSTOMER'
 ];



  const registerUser = (e) => {
    console.log("registerUser");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData);
    console.log(registerData);

    registerAPI(registerData).then((response) =>{
          console.log(response.data);
    }).catch(error => {
          console.error(error);
    })
    };


  const resetRegister = () => {
    console.log("Hello reset");
  };

  const cancelRegister = () => {
    navigator("/login");
  };

  const loginUser = () => {
      navigator("/login");
    };

  return (
    <>
      <Card className="text-center">
        <Card.Header as="h5">Register Yourself .. !!</Card.Header>
        <Card.Body>
          <Form onSubmit={registerUser}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                User Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="User Name.."
                  name="userName"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="password"
                  placeholder="Password.."
                  name="password"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Email Id
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="email"
                  placeholder="Email Id.."
                  name="email"
                />
              </Col>
            </Form.Group>
             <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
                            Mobile Number
             </Form.Label>
                          <Col sm={10}>
                            <Form.Control
                              size="sm"
                              type="text"
                              placeholder="Mobile Number.."
                              name="mobileNumber"
                            />
                          </Col>
             </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Form.Label column sm={2}>
                Select Category
              </Form.Label>
              <Col sm={10}>
                <Form.Select aria-label="Roles " name="roles">
                 <option value="⬇️ Select a roles ⬇️"> -- Select a Role -- </option>
                 {rolesList.map((role)=> <option value={role} key={role}>{role}</option>)}
                </Form.Select>
              </Col>
            </Form.Group>
            <Button variant="outline-success" type="submit" size="md">
              Save
            </Button>{" "}
            <Button
              variant="outline-warning"
              type="button"
              onClick={resetRegister}
              size="md"
            >
              Reset
            </Button>{" "}
            <Button
              variant="outline-danger"
              type="button"
              onClick={cancelRegister}
              size="md"
            >
              Cancel
            </Button>
            <Button
                                                variant="outline-info"
                                                type="button"
                                                onClick={loginUser}
                                                size="md"
                                              >
                                              Login
                                              </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default RegisterComponent;
