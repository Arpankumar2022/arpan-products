import {useState}  from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const UseState2Process = () =>{
     {/**
      Wherever it is required to use  useState hook more than 2
      then we can go for useReducer in this flow.
      */}

     const[loading,setLoading] = useState(false);
     const[post, setPost] = useState({});
     const[error, setError] = useState(false);
     const [show, setShow] = useState(true);

     const handleSetShow = () =>{
        setError(false);
        setShow(false);
     }

     const handleFetch =() =>{
     setLoading(true);
     console.log("Hi Arpan !!");
        fetch("https://jsonplaceholder.typicode.com/posts/1")
              .then((response)=>{
             // console.log(response.json());
               return response.json();
           }).then((data) =>{
               setPost(data);
               setLoading(false);
         }).catch((err)=>{
              setError(true);
              setLoading(false);
         })
     }
  return (
     <>
         <div>
               <Button onClick={handleFetch} variant="success">
                  {loading?'Wait...':"Fetch Records"}
               </Button>
               <p>
                  {post?post.title : "No Records Found !!"}
               </p>
               {error &&
                  <Alert variant="danger" onClose={handleSetShow} dismissible>
                      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                      <p>
                        Something went wrong !!
                      </p>
                    </Alert>
                  }

         </div>
     </>




  );



}















export default UseState2Process





{/**
  <Button as="a" variant="primary">
               Button as link
   </Button>


   <Badge bg="primary" as={Button} >
               Fetch Records
             </Badge>
 */}