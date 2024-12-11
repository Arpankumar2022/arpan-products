import {useState, useReducer } from 'react';
import UseReducerProcess1 from './UseReducerProcess1.js';
import {INITIAL_STATES}  from './useReducerConstant.js';
import {ACTION_TYPES}  from './useReducerConstant.js';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';


const UseReducerClient = () =>{

  {/**  Format of useReducer in this line const [state, dispatch] = useReducer(reducer, { age: 42 });
    Start---To reduce this complexity and keep all your logic in
       one easy-to-access place, you can move that state logic into
       a single function outside your component, called a “reducer”.  --- End

       const [state, dispatch] =  useReducer(useReducerProcess1, INITIAL_STATE);

       state --> it returns states denotes what are the current states required.
       dispatch --> it returns dispatcher as function,this function allows us to send actions
                    to the reducer.

        The object you pass to dispatch is called an “action”:

        dispatch(
            // "action" object:
            {
              type: 'deleted',  -- > 'what_happened',
              id: taskId,       --> // other fields go here
            }

 */}
  const [show,setShow] = useState(true);
   const [state,dispatch] =  useReducer(UseReducerProcess1, INITIAL_STATES);

   const handleFetch = () =>{
      console.log("Hi We have reached !!")
      dispatch({type: ACTION_TYPES.FETCH_START});
      fetch("https://jsonplaceholder.typicode.com/posts")
    //  fetch("")
                    .then((res)=> res.json()
                  ).then((data) =>
                     dispatch({type: ACTION_TYPES.FETCH_SUCCESS , payload : data})
                  ).catch(err=>
                     dispatch({type: ACTION_TYPES.FETCH_ERROR})
               );
   };


  const handleSetShow = () =>{
    dispatch({type: ACTION_TYPES.CLOSE_POP_UP});
     }


return (
   <>
     <div>
           <Button onClick={handleFetch} variant="success">
                             {state.loading?'Wait...':"Fetch Records"}
                          </Button>
                                                   {state.error &&
                                                        <Alert variant="danger" onClose={handleSetShow} dismissible>
                                                            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                                            <p>
                                                              Something went wrong !!
                                                            </p>
                                                          </Alert>
                                                        }
                          <Table striped bordered hover size="sm">
                                <thead>
                                  <tr>
                                    <th>Id </th>
                                    <th>User Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {Array.from((state.post)).map((value,item) => (
                                             <tr>
                                             <td>{value.id}</td>
                                              <td>{value.userId}</td>
                                              <td>{value.title}</td>
                                              <td>{value.body}</td>
                                              </tr>
                                      ))}
                                 </tbody>
                                 </Table>



     </div>
   </>
);
}


export default UseReducerClient


{/**

  <h3>: </h3> {state.post?.id}
                             <h3>User Id  is : </h3> {state.post?.userId}
                             <h3>Title is : </h3> {state.post?.title}
                             <h3>Body  is : </h3> {state.post?.body}

 */}