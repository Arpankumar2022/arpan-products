import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {addProduct} from '/src/services/ProductService';
import {useNavigate}  from 'react-router-dom'

const CreateProductComponent = () => {

 const navigator = useNavigate();

 const addProductFunction = (e) => {
   e.preventDefault();
   const formData = new FormData(e.currentTarget);
   const productData = Object.fromEntries(formData);
   console.log(productData);

   addProduct(productData)
     .then((response) => {
       console.log(response.data);
       navigator("/productsList");
     })
     .catch((error) => {
       console.error("error" + error);
     });

 };

  const resetProduct = () => {
    console.log("Hello reset");
  };

  const cancelProduct = () => {
    navigator('/productsList');
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header as="h5">Add Products here !!</Card.Header>
        <Card.Body>
          <Form onSubmit={addProductFunction}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Product Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Product Name.."
                  name="productName"

                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Product Price
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Product Price.."
                  name="productPrice"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-2">
              <Form.Label column sm={2}>
                Select Category
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  aria-label="Default select Category"
                  name="categoryId"
                >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Product Description
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  size="sm"
                  type="textarea"
                  as="textarea"
                  rows={3}
                  placeholder="Product Description.."
                  name="productDescription"

                />
              </Col>
            </Form.Group>
            <Button variant="outline-success" type="submit"  size="md" >
              Save
            </Button>{" "}
            <Button variant="outline-warning" type="button" onClick={resetProduct} size="md">
              Reset
            </Button>{" "}
            <Button variant="outline-danger"  type="button" onClick={cancelProduct} size="md">
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreateProductComponent;

{
  /**

 const addEmployee = ()  =>{
   console.log("Hello ");
      return  (
       <>
       <div>
      <Spinner animation="border" variant="success" />
      </div>
      </>
 );
   }



 */
}
