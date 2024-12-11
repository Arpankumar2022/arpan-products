import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const ListAndKeysIteratingOnArrayProcess = () =>{

   const names = ['Arpan' , 'Kumar' , 'Alice' , 'Jim' , 'Smith'];

   const persons = [{
            id : 1 ,
            name : 'Bruce' ,
            age : 30,
            skill : 'React'
        },{
           id : 2 ,
           name : 'Arpan' ,
           age : 33,
           skill : 'Java'
        },
        {
              id : 3 ,
              name : 'Kumar' ,
              age : 34,
              skill : 'AWS'
        },
        {    id : 4 ,
             name : 'Lewis' ,
             age : 35,
             skill : 'Spring'
          },
          {    id : 5 ,
               name : 'David' ,
               age : 36,
               skill : 'Microservices'
           }]

            const handleClick = () =>{
                 console.log("Hi Arpan !!");
            }
   return (
      <>
        Details are below :
             <Table striped bordered hover>
               <thead>
                 <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Age</th>
                   <th>Skill</th>
                   <th>Operation</th>
                 </tr>
               </thead>
               <tbody>
                {persons.map((value, index)=>
                    <tr key={index}>
                      <td>{value.id}   </td>
                      <td>{value.name} < /td>
                      <td>{value.age}  </td>
                      <td>{value.skill} </td>
                      <td><Button onClick={handleClick} variant="success"> Click Here </Button></td>
                    </tr>
                  )}
                </tbody>
                </Table>
      </>
   );
}


export default ListAndKeysIteratingOnArrayProcess