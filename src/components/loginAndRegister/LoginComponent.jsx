import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import {loginAPI} from '/src/services/AuthService.js';
import {storeToken} from '/src/services/AuthService.js';

const LoginComponent = () => {

 const navigator = useNavigate();




  const loginUser =(e) =>{
    console.log("loginUser");
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginObj = Object.fromEntries(formData);
    console.log(loginObj)

     loginAPI(loginObj).then((response) =>{
      console.log(response.data);
      const token = 'Bearer ' + response.data.accessToken;
      storeToken(token);
      navigator("/productsList");
    }).catch(error =>
    console.error(error));

  };

  const resetLogin = () => {
    console.log("Hello reset");
  };

  const cancelLogin = () => {
    navigator("/login");
  };

  const registerUser = () => {
      navigator("/register");
    };




  return (
    <>
     <Card className="text-center">
             <Card.Header as="h5">Login Here ...</Card.Header>
             <Card.Body>
               <Form onSubmit={loginUser}>
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
                       type="text"
                       placeholder="Password.."
                       name="password"
                     />
                   </Col>
                 </Form.Group>
                 <Button variant="outline-success" type="submit" size="md">
                   Save
                 </Button>{" "}
                 <Button
                   variant="outline-warning"
                   type="button"
                   onClick={resetLogin}
                   size="md"
                 >
                   Reset
                 </Button>{" "}
                 <Button
                   variant="outline-danger"
                   type="button"
                   onClick={cancelLogin}
                   size="md"
                 >
                   Cancel
                 </Button>
                 <Button
                                    variant="outline-info"
                                    type="button"
                                    onClick={registerUser}
                                    size="md"
                                  >
                                  Register
                                  </Button>
               </Form>
             </Card.Body>
           </Card>
    </>
  );
};

export default LoginComponent;
