import {useState} from 'react'
import useLocalStorage  from './useLocalStorage.js'
import useLogger  from './useLogger.js'

const CustomHookProcess = ()=>{
   const[name, setName]  = useLocalStorage('name', ' ');
   useLogger(name)

return (
  <>
    <div>
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
     </div>
  </>
);
}


export default CustomHookProcess