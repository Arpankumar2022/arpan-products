import logoImage from '../../assets/images/logoProduct.jpg';
import Button from '../UI/Button.jsx';
//import ProductCartModal from '../product1/ProductCartModal.jsx';
import {useState} from 'react';
import Modal from '../UI/Modal.jsx';
//import React, { useRef } from "react";
import "./Modal.css";
const NavbarHeader = () => {
 const [modal, setModal] = useState(`false`);

  const handleAddCart = () => {
    setModal(`true`);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
       <header id="main-header">
                            <div id="title">
                     <img src={logoImage}/>
                        <h4>Arpan Bags Products Ltd.</h4>
                     </div>
                     </header>
    </>
  );
};

export default NavbarHeader;