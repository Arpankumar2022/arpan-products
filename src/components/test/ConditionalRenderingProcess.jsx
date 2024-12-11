import {useState} from 'react'

const ConditionalRenderingProcess =() =>{

 const[isLoadingState , setLoadingState] =  useState(false);


 let message = '';
 if(isLoadingState){
    message = <p> Welcome User </p>
    }else{
    message =  <p>Login Again !! </p>
    }


function handleClick(){
  setLoadingState(true)
  }

return (
<div>
Message is : {message}
<button  onClick={()=> handleClick()}>Login </button>

</div>
);
}
export default ConditionalRenderingProcess

{/*  --One Approach
   if(isLoadingState){
  return <p>Welcome User </p>
  }else{
  return <p>Login Again !! </p>
  }
 */}