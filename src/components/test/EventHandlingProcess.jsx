import {useState}  from 'react'

const EventHandlingProcess = () =>{

  const[count, setCount] = useState(0);

  function handleCounter(count){
  setCount(count+1);
  }

  function resetCounter(){
    setCount(0);
    }

 return (
 <>
     <div>
       <h1>Event Handling Process </h1>
       <h2>Counter Value is {count}</h2>
       <button onClick={()=> handleCounter(count)}>Click Here To Counter</button>
       <button onClick={()=> resetCounter()}>Click Here To Reset</button>
     </div>
     </>
 );
}

export default EventHandlingProcess