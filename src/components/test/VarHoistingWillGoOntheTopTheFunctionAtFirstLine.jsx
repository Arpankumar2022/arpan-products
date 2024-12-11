{/**
 variable var is used wherever on the functional scope we can say that
 it can be used anywhere in the application and can be called anywhere
 in the whole page or file.

 This is known as hoisting , we can see in this below example , we can defined var in the bottom
 of the file and can see that it is  picking value from it.That means it put var in top of the
 functions.


   a)  For var it is possible to call variable var before its initialization but for let and const
       it is not used.

 */}

const VarHoistingWillGoOntheTopTheFunctionAtFirstLine = () =>{
     console.log("Called Firstly"+ greet);
    // console.log(letGreet+"ReferenceError: Cannot access 'letGreet' before initialization");

     const greetUser = () =>{

   //  console.log(letGreet);
     if(greet=="Arpan"){
        console.log(greet+"This is example of using hoisting here");
        console.log("In hoisting we can use variable in downside in the js file and it will provide that declaration on the top of the js file");

     }else {
            console.log("In hoisting we can use variable in downside in the js file and it will provide that declaration on the top of the js file");

     }

     }
     var greet = "Arpan";
     let letGreet = "letGreet";
     return (
        <>
          <button onClick={greetUser}> Click Me </button>
        </>
    );
}


export default VarHoistingWillGoOntheTopTheFunctionAtFirstLine