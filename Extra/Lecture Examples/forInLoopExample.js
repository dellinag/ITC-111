// ForIn - use to iterate through properties of an object

/*
    Syntax:
            for (property in object){


            }
*/

var user ={
    fName: 'Some',
    lName: 'Body',
    age : 18
}
var person = '';
for(p in user){
    person += user[p] + ' ';
}

console.log(person);