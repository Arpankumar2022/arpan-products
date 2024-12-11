import {useState, useRef, useEffect } from 'react'

{/***
 1- A Controlled input accepts its current value as a prop as well as a callback
   to change that value, You could say its more 'React Way' of approaching
   this (which does not mean you should always use it.)

 2-  <div> <input type="text" value={name}  onChange = {(e) => handleClick(e.target.value)}/> </div>
     this is controller by events we need to use onChange , onClick method needs to use events handling

 3- Uncontrolled uses useRef.

 */}



const UseRefProcessSecond = () =>{

  const[name, setName] = useState('');


function handleClick(name){
 setName(name);
};


return (
    <>
       <div>
            <h1> Hello this is Arpan </h1>
            <p>Please Enter your name </p>
            <div> <input type="text" value={name}  onChange = {(e) => handleClick(e.target.value)}/> </div>
            <div>My Name is : {name} </div>
       </div>

    </>


);

}



export default UseRefProcessSecond