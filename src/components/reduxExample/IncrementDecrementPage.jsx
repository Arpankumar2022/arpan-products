import Button from 'react-bootstrap/Button';
import Counter  from './Counter';
const IncrementDecrementPage = () =>{

return (

<div>
  <p>Usage of React Redux </p>
  <h4> Start Editing Magic !!  </h4>

  <Button variant="success">Increment</Button>
  <Button variant="warning">Decrement</Button>

  <Counter/>

</div>

);


}


export default IncrementDecrementPage