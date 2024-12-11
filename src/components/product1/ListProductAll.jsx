import './Product.css';
import NavbarHeader from '/src/components/header/NavbarHeader.jsx';
import logo from "/src/assets/images/sasta-sunder-A.jpg";
import {listOfProducts} from '/src/services/ProductService';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
//import Button from 'react-bootstrap/Button';
import {useNavigate}  from 'react-router-dom';
import Button from '../UI/Button.jsx';

const ListProductAll = () => {

 const [productsList, setListOfProducts] = useState([]);
 const [modal, setModal] = useState(false);

  const handleAddCart = () => {
    setModal(true);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

 useEffect(() => {
            {/** useEffect contains promise type syntax  */}
            listOfProducts().then((response) => {
                setListOfProducts(response.data);
              }).catch((error) => {
                console.error("error"+error);
              });
          }, []);

return (
  <>

    <div className="container-fluid mt-5 mb-5">
                   <div className="row g-3">

                      {/*  <div className="container-fluid col-md-3">
                           <div className="card t-products p-2">
                               <h6 className="text-uppercase">Computer & Periferals</h6>
                               <div className="card-body p-lists">
                                   <div className="d-flex justify-content-between mt-2"> <span>Laptops</span> <span>23</span> </div>
                                   <div className="d-flex justify-content-between mt-2"> <span>Desktops</span> <span>46</span> </div>
                                   <div className="d-flex justify-content-between mt-2"> <span>Monitors</span> <span>13</span> </div>
                                   <div className="d-flex justify-content-between mt-2"> <span>Mouse</span> <span>33</span> </div>
                                   <div className="d-flex justify-content-between mt-2"> <span>Keyboard</span> <span>12</span> </div>
                                   <div className="d-flex justify-content-between mt-2"> <span>Printer</span> <span>53</span> </div>
                                   <div className="d-flex justify-content-between mt-2"> <span>Mobiles</span> <span>203</span> </div>
                                   <div className="d-flex justify-content-between mt-2"> <span>CPU</span> <span>23</span> </div>
                               </div>
                           </div>
                           <div className="card processor p-2">
                               <div className="heading d-flex justify-content-between align-items-center">
                                   <h6 className="text-uppercase">Processor</h6>
                                   <span>--</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault"> Intel Core i7 </label> </div>
                                   <span>3</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Intel Core i6 </label> </div>
                                   <span>4</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Intel Core i3 </label> </div>
                                   <span>14</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Intel Centron </label> </div>
                                   <span>8</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Intel Pentinum </label> </div>
                                   <span>14</span>
                               </div>
                           </div>
                           <div className="card brand p-2">
                               <div className="heading d-flex justify-content-between align-items-center">
                                   <h6 className="text-uppercase">Brand</h6>
                                   <span>--</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault"> Apple </label> </div>
                                   <span>13</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Asus </label> </div>
                                   <span>4</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Dell </label> </div>
                                   <span>24</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Lenovo </label> </div>
                                   <span>18</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Acer </label> </div>
                                   <span>44</span>
                               </div>
                           </div>
                           <div className="card type p-2 mb-2">
                               <div className="heading d-flex justify-content-between align-items-center">
                                   <h6 className="text-uppercase">Type</h6>
                                   <span>--</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label className="form-check-label" htmlFor="flexCheckDefault"> Hybrid </label> </div>
                                   <span>23</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Laptop </label> </div>
                                   <span>24</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Desktop </label> </div>
                                   <span>14</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Touch </label> </div>
                                   <span>28</span>
                               </div>
                               <div className="d-flex justify-content-between mt-2">
                                   <div className="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> <label className="form-check-label" htmlFor="flexCheckChecked"> Tablets </label> </div>
                                   <span>44</span>
                               </div>
                           </div>
                       </div> */}
                       <div className="container-fluid col-md-9">
                           <div className="row">
                               {productsList.map((val) =>
                                   <div className="col-sm-4">
                                       <div className="card">
                                           <div className="card-body">
                                               <div className='card-header'>
                                                   <span className="off bg-success" key={val.id}>{val.offer}</span>
                                                   <div className="text-center"> <img src={val.productLogo} alt={val.productName} width="200" />
                                                    </div>
                                                   <div className="about text-center">
                                                       <h5 key={val.id}>{val.productName}</h5>
                                                       <p className="meal-item-price">
                                                       ${val.productPrice}
                                                       </p>
                                                   </div>
                                                       <Button  >Add to cart</Button>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               )}
                           </div>
                       </div>

                   </div>
               </div>


  </>
);
};

export default ListProductAll;