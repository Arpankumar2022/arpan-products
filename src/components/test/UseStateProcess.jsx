import {useState} from 'react'

const UseStateProcess=(props) =>{

const[obj,setObj] = useState(props.student);

function handleClick(obj){
setObj({name : "name is updated",
        email : "email is updated",
        address : "address is updated"});
}
 return (
 <>
  <div>
        <h1>UseStateProcess </h1>
        <h2>{obj.email}</h2>
        <h2>{obj.name}</h2>
        <h2>{obj.address}</h2>
        <button  onClick={()=>handleClick(obj)}>Click Here</button>
  </div>
  </>
);
}

export default UseStateProcess



