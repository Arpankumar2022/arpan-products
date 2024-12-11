import {useState, useEffect}  from 'react'



{/** This useEffect only related to Side Effect that means it will work when anything changes
 in second parameter */}


const UseEffectProcess = () =>{

 const [resourceType , setResourceType ] = useState('posts')


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
          .then(response=> response.json())
          .then(json=> console.log(json))
    },[resourceType])
return (
<>
<div>
   <button onClick={()=> setResourceType('posts')}>Posts</button>
   <button onClick={()=> setResourceType('users')}>Users</button>
   <button onClick={()=> setResourceType('comments')}>Comments</button>
</div>
<h1>{resourceType}</h1>
</>
);
}

export default UseEffectProcess