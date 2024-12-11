

const SpreadOperatorProcess = () =>{

{/** first case   */}
const fullName = ['Arpan','Kumar']
const employeeName = [1, ...fullName, 'NOIDA', 34]

console.log(fullName);

console.log(employeeName);

{/** Second case   */}

var shooterGame = ['Call Of Duty', 'Mario' , 'Crocodile'];
var racingGame = ['Need for speed','Speedester', 'New Era of Speed'];
var games = [...shooterGame,...racingGame];
console.log(games);

{/***  Third case  -- Destructuring */}
var[first,...others] = shooterGame
console.log(first);
console.log(others);





return(
);
}

export default SpreadOperatorProcess