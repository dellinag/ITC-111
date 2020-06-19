//Variable Methods

//String Methods


    var str = 'this is a string';

//Length Method - returns the size of a string
    var strLen = str.length;

//idenxOf Method - gets the position of a charcter in a string
    var strIdx = str.indexOf('g');
    
//Slice Method - gets a substring(specified portion of string)
    var strSlice = str.slice(5,7);

//'toUpperCase' & 'toLowerCase Methods - changes the case of a character in a string
    var strUpper = str.toUpperCase();
    var strLower = str.toLowerCase();

//Replace Method - replace a specified character in a string
    var strRpl = str.replace('a', 'our');
    //console.log(strRpl);

//Arrays - Group of elemts/objects stored under the same.center 
    var fruits = ['apples', 'oranges', 'grapes', 'lemons', 'bananas'];

//Array Methods

//length Method- gets the number of elements in an array
    //console.log(fruits.length);

//push() Method - adds new element to the end of an array
    //console.log(fruits);
    //fruits.push('cantelop');
    //console.log(fruits);

//pop() Method - removes the last element in an array
    //console.log(fruits);
    //fruits.push('cantelop');
    //console.log(fruits);

//sorts() - the elements in an array
    //console.log(fruits);
    //console.log(fruits.sort());

//toString
    console.log(fruits);
    console.log(fruits.toString());

//Concatenation 
    //console.log(strUpper + ", " + strLower);