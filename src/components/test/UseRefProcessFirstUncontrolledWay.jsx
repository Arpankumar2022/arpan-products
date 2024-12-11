
import { Formik, Field, Form } from 'formik';
import Button from 'react-bootstrap/Button';
import VStack from 'react-bootstrap/Stack';
import {useRef}  from 'react'


{/***
  Use Ref is basically used for below concerns :---  UnControlled Way of Handling Forms

 1-  The useRef Hook allows you to persist values between renders.
     It can be used to store a mutable value that does not cause a RE-RENDER when updated.
     It can be used to access a DOM element directly.

 2- useRef() only returns one item. It returns an Object called current.
    When we initialize useRef we set the initial value: useRef(0).

+++++++++++++++++++++++

If we tried to count how many times our application renders using the
useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
To avoid this, we can use the useRef Hook.
const refValues = useRef(initialValues)
+++++++++++++++++++++++




++++++++++++++++++++++++
JSON.stringify(obj, replacer, space))  Meaning
obj	 ---->      Required. The value to convert to a string
replacer ----> 	Optional. Either a function or an array used to transform the result. The replacer is called for each item.
space ----> 	Optional. Either a String or a Number.
                A string to be used as white space (max 10 characters),
               or a Number, from 0 to 10, to indicate how many space characters to use as white space.

               Here for space if we pass the space value as "SPACE" in string form , it will make the space
               like that.
++++++
 */}

const UseRefProcessFirstUncontrolledWay = () =>{


  const luckyName = useRef(null);
  const fullNameInputElement = useRef();
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const passwordConfirmationInputElement = useRef();

const submitForm =(e) =>{

  e.preventDefault();

  const data = {
   fullName: fullNameInputElement.current?.value,
   email: emailInputElement.current?.value,
   password: passwordInputElement.current?.value,
   passwordConfirmation: passwordConfirmationInputElement.current?.value
  }
  console.log(data);

}


  return (
  <>
      <div>
        <form  action=""  onSubmit={submitForm} >
             <div className="flex flex-col mb-4">
             <label

                          htmlFor="full_name"
                        >
                          Full name
                        </label>
                        <input
                          ref={fullNameInputElement}
                          placeholder="Full name"
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label

                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          ref={emailInputElement}
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          ref={passwordInputElement}
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                      <div className="flex flex-col mb-4">
                        <label
                          htmlFor="password_confirmation"
                        >
                          Password Confirmation
                        </label>
                        <input
                          ref={passwordConfirmationInputElement}
                          placeholder="Password Confirmation"
                          type="password"
                        />
                      </div>
             <button>Submit</button>
        </form>
      </div>
</>
  );
}

export default UseRefProcessFirstUncontrolledWay


{/***
   Formik Approach to populate the form and submitting the form data

   --

    <Formik
                 initialValues={{
                   firstName: '',
                   lastName: '',
                   email: '',
                 }}
                 onSubmit={(values, actions) => {
                  console.log(values);
                  console.log(actions);
                            alert(JSON.stringify(values, null, 2));
                                          }}
               >
                 {({ isSubmitting }) => (
                   <Form>
                   <VStack spacing={4} align="flex-start">
                     <label htmlFor="firstName">First Name</label>
                     <Field name="firstName" placeholder="Arpan" />

                     <label htmlFor="lastName">Last Name</label>
                     <Field name="lastName" placeholder="Kumar" />

                     <label htmlFor="email">Email</label>
                     <Field name="email" placeholder="arpan.kumar@arpanbags.com" type="email" />

                     <button type="submit" disabled={isSubmitting}>Submit</button>

                   </VStack>
                   </Form>
                 )}
               </Formik>



 */}