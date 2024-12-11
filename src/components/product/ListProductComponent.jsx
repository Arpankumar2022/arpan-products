import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {listOfProducts} from '/src/services/ProductService';
import {useNavigate}  from 'react-router-dom'
import WelcomePopUp from './WelcomePopUp.jsx'
import Modal from './Modal.jsx';

const ListProductComponent = () => {

  const [productsList, setListOfProducts] = useState([]);

  const navigator = useNavigate();

  const productsList1 = [
    {
      productName: "Product 1",
      productDescription: "Description for Product 1",
      productPrice: "$10.00",
      category: "Category A"
    },
    {
      productName: "Product 2",
      productDescription: "Description for Product 2",
      productPrice: "$20.00",
      category: "Category B"
    },
    {
      productName: "Product 3",
      productDescription: "Description for Product 3",
      productPrice: "$30.00",
      category: "Category A"
    },
    {
      productName: "Product 4",
      productDescription: "Description for Product 4",
      productPrice: "$40.00",
      category: "Category C"
    },
    {
      productName: "Product 5",
      productDescription: "Description for Product 5",
      productPrice: "$50.00",
      category: "Category B"
    },
    {
      productName: "Product 4",
      productDescription: "Description for Product 4",
      productPrice: "$40.00",
      category: "Category C"
    },
    {
      productName: "Product 5",
      productDescription: "Description for Product 5",
      productPrice: "$50.00",
      category: "Category B"
    },
    {
      productName: "Product 4",
      productDescription: "Description for Product 4",
      productPrice: "$40.00",
      category: "Category C"
    },
    {
      productName: "Product 5",
      productDescription: "Description for Product 5",
      productPrice: "$50.00",
      category: "Category B"
    },
    {
      productName: "Product 4",
      productDescription: "Description for Product 4",
      productPrice: "$40.00",
      category: "Category C"
    },
    {
      productName: "Product 5",
      productDescription: "Description for Product 5",
      productPrice: "$50.00",
      category: "Category B"
    },
    {
      productName: "Product 4",
      productDescription: "Description for Product 4",
      productPrice: "$40.00",
      category: "Category C"
    },
    {
      productName: "Product 5",
      productDescription: "Description for Product 5",
      productPrice: "$50.00",
      category: "Category B"
    }
  ];


useEffect(() => {
    {/** useEffect contains promise type syntax  */}
    listOfProducts().then((response) => {
        setListOfProducts(response.data);
      }).catch((error) => {
        console.error("error"+error);
      });
  }, []);

const addNewProducts = () =>{
   navigator('/add-products');
   }

   const [isModalOpen, setIsModalOpen] = useState(false);

   const closeModal = () => {
     setIsModalOpen(false);
   };
 
   useEffect(() => {
     // Open the modal when the component mounts
     setIsModalOpen(true);
   }, []);
 
 


  return (
    <>
     
    
      <Table striped="columns" responsive="md">
        <thead>
          <tr><th>Id</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Product Price</th>
            <th>Category </th>
            <th>Click</th></tr>
        </thead>
        <tbody>
          {productsList1.map((value, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{value.productName}</td>
              <td>{value.productDescription}</td>
              <td>{value.productPrice}</td>
              <td>{value.category}</td>
              <td>
                <Button onClick={addNewProducts}> Explore </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ListProductComponent;



{/**
  {isModalOpen && <Modal closeModal={closeModal} />}
   */}