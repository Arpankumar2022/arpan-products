import {useEffect} from 'react'


export default function useLogger(value){
    useEffect(()=>{
      console.log("Value Changed");
    }, [value])
}