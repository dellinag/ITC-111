// Else If 

// Adds additional condition to the if-else statement block

/* EX 1
var msg = 'Fellow Squirl';
if(msg != ''){
    console.log(msg);
} else{
    console.log('No message found');
}
*/

/* EX 2
var msg = 'Hello World';
if(msg == ''){
    console.log('No message found');
} else if{ msg != 'Hello World') {
    console.log('Please just say hello!');
} else {
    console.log('msg');
}   
*/

// Nest - placing one object inside of another
function hello() { // outer function
    var msg = 'hello'; // create a variable local to the hello() function
    function world() { msg += 'world.'; } // inner function which is nested function
    world();// calls to the inner function
    return msg; // return the value of the local variable 
}

var message = hello(); // creating a variable and assigning the return of hello()

console.log(message); // display hello() fucntion return to console


// if(condition){
//     if(condition2){

//     } else {

//     }
// } else {
    
//}