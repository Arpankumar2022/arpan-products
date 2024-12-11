import './Product.css';
import NavbarHeader from '/src/components/header/NavbarHeader.jsx';
import logo from "/src/assets/images/sasta-sunder-A.jpg";
import {listOfProducts} from '/src/services/ProductService';


const ListProducts = () => {
    const productsList1 = [
        {
            logo: "/src/assets/images/prmium-bag-A.jpg",
            productName: "Product 1",
            productDescription: "Description for Product 1",
            productPrice: " 10.00",
            category: "Category A",
            offer: "-25% OFF"
        },
        {
            logo: "/src/assets/images/prmium-bag-A.jpg",
            productName: "Product 1",
            productDescription: "Description for Product 1",
            productPrice: " 10.00",
            category: "Category A",
            offer: "-20% OFF"
        },
        {
            logo: "/src/assets/images/prmium-bag-A.jpg",
            productName: "Product 1",
            productDescription: "Description for Product 1",
            productPrice: " 10.00",
            category: "Category A",
            offer: "-35% OFF"
        },
        {
            logo: "/src/assets/images/sasta-sunder-A.jpg",
            productName: "Product 1",
            productDescription: "Description for Product 1",
            productPrice: " 10.00",
            category: "Category A",
            offer: "-55% OFF"
        },
        {
            logo: "/src/assets/images/sasta-sunder-A.jpg",
            productName: "Product 1",
            productDescription: "Description for Product 1",
            productPrice: " 10.00",
            category: "Category A",
            offer: "-55% OFF"
        },
        {
            logo: "/src/assets/images/sasta-sunder-A.jpg",
            productName: "Product 1",
            productDescription: "Description for Product 1",
            productPrice: " 10.00",
            category: "Category A",
            offer: "-55% OFF"
        }







    ];
    return (
        <>
            <div className="container-fluid mt-5 mb-5">
                <div className="row g-3">
                    <div className="container-fluid col-md-3">
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
                    </div>
                    <div className="container-fluid col-md-9">
                        <div class="card-header border border-primary">WELCOME TO ARPAN BAGS PRODUCTS </div>
                        <div class="row">
                            {productsList1.map((val) =>
                                <div class="col-sm-4">
                                    <div class="card">
                                        <div className="card-body">
                                            <div className='card-header'>
                                                <span className="off bg-success">{val.offer}</span>
                                                <div className="text-center"> <img src={val.logo} width="200" /> </div>
                                                <div className="about text-center">
                                                    <h5 key={val.id}>{val.productName}</h5>
                                                    <span>{val.productPrice}</span>
                                                </div>
                                                <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">
                                                    <button className="btn btn-primary text-uppercase">Add to cart</button>
                                                    <div className="add"> <span className="product_fav"><i className="fa fa-heart-o"></i></span> <span className="product_fav"><i className="fa fa-opencart"></i></span> </div>
                                                </div>
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




}

export default ListProducts;