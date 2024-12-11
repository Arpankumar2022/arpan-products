import axios from "axios";
import {getToken} from '/src/services/AuthService';
const REST_API_BASE_URL = "http://localhost:9092/myWebApp/";


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
   config.headers['Authorization'] = getToken();
   return config;
  }, function (error) {
    // Do something with request error
   return Promise.reject(error);
 });


//export const listOfProducts = ()  => axios.get(REST_API_BASE_URL+'v1/api/products/getAll-products');
 export  const  listOfProducts = ()  => axios.get(REST_API_BASE_URL+'products');

export const addProduct = (product) => axios.post(REST_API_BASE_URL+'v1/api/products/create-products', product);


