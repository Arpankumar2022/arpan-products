{/*
Destructing was introduced in ES6, ITS A JS FEATURE  THAT ALLOWS US TO
EXTRACT MULTIPLE PIECES OF DATA FROM AN ARRAY , OR OBJECT , AND ASSIGN THEM TO
THEIR OWN VARIABLES.

1- first way to deStructure -> It in function parameter itself
2- second way to deStructure ->  It in a function body
*/}


{/*
   1- first way to deStructure -> It in function parameter itself
      Function Parameter itself destructuring
      const DeStructureProcess = ({name, email, address}) => {
*/}

{/*
    2- second way to deStructure ->  It in a function body
    Function Body itself destructuring
    const DeStructureProcess = (props) => {
    const{name} =  props.student
*/}

const DeStructureProcess = (props) => {
 const{name} =  props.student
 return (
 <>
  <div>
        <h1>DeStructureProcess </h1>
        <h2>{name}</h2>
  </div>
  </>
);
}
export default DeStructureProcess