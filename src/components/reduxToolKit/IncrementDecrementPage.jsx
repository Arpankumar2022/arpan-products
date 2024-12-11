import Button from 'react-bootstrap/Button';
import Counter  from './Counter';
import { counterActions } from './store'; 
import { useDispatch, useSelector } from 'react-redux';


const IncrementDecrementPage = () =>{
  const dispatch = useDispatch();
  const counter = useSelector((state)=>state.counter);
  const show = useSelector((state)=>state.showCounter);

  const incrementHandler = () =>{
    dispatch(counterActions.increment());
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement());
  }


return (

<div>
  <p>Usage of React Redux ToolKit</p>
  <h4> Start Editing Magic !!  </h4>

  <Button variant="success"  onClick={incrementHandler}>Increment</Button>
  <Button variant="warning" onClick={decrementHandler}>Decrement</Button>

  <Counter  updatedValue={counter}/>
  {/**<div >
     Updated Value :  {counter}
  </div> */}

</div>

);


}


export default IncrementDecrementPage