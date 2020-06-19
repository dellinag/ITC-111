//Flow Control - allows us to make changes based on decisions made by user

//Loops - iterate/count thru elements. Allows for repetition of repetitive parts of code


/*
//For loop
var fruits = ['apples', 'oranges', 'grapes', 'lemons', 'bananas'];

for (var i = 0; i < fruits.length; i++) {
    consolse.log(i + "is the index of " + fruits[i] + ".");
}
*/


//Conditions 
    //If-Else Statement - set condition to do something if true or something else if it is not true.center
    var number = 10;

    function oddEven(num) {
        if(num % 2 == 0) {
            console.log(num + "is even.");
        } else{
            console.log(num + "is odd.");
        }
    }
    oddEven(number);