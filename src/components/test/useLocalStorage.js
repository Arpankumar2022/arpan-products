import {useState,useEffect}  from 'react'

function getSavedValue(key, initialValue){

if (localStorage !== 'undefined') {
      return localStorage.getItem(key)
    }


if(initialValue instanceof Function)
return initialValue()

return initialValue

}
export default function useLocalStorage(key,initialValue){

  const[value, setValue] = useState(()=>{
  return getSavedValue(key,initialValue)
  });

   useEffect(()=>{
     localStorage.setItem(key,value)
   }, [value])



  // Similarly to return type of useState()
  return [value,setValue]

}
