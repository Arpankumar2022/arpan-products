import { Stack, HStack, VStack,Box } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['2148px', '2172px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
})


const Student = (props)=> {
console.log(props);
return (

    <div>
      <h1>Student details </h1>
       {/*<h2>Student Name : {props.student.name} </h2>
       <h2>Student Email : {props.student.email} </h2>
       <h2>Student Address : {props.student.address} </h2>
       */}
      <p> Skill Sets : {props.data}  </p>
    </div>


);
}

export default Student