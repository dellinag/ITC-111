// Objects 

// objects are variable that store multiple values

// var x = 5; // number variable

// var x2 = [5,6,7,1,21,9,37,565]; // number array variable
//Ex 1
var x3 = {
    fName: 'tom',
    lName: 'thompson',
    age: 29,
    isMarried: true,

    displayFullName: function(){return fName + " " + this.lName; }

};
console.log(x3.displayFullName())

//Ex 2
var car = {
    make: '',
    model: '',
    year: '',
    startEngine: function(){return'engineStarted'; }
}

console.log(x3.displayFullName())