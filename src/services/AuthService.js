import axios from 'axios';

const AUTH_REST_API_BASE_URL = 'http://localhost:9090/myWebApp/authenticate/';


export const registerAPI = (registerObj) =>{
    axios.post(AUTH_REST_API_BASE_URL+'register',registerObj);
}

export const loginAPI = (loginObj) =>{
    axios.post(AUTH_REST_API_BASE_URL+'login',loginObj);
}

export const storeToken = (token)  =>{
    localStorage.setItem('token' , token);
}

export const getToken = ()  =>{
    localStorage.getItem('token');
}

