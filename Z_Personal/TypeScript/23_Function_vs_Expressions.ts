console.log(fullName('Mary','Williams'));
// the code will error out if the line below runs like this with error otherFullName is not a function
//console.log(otherFullName('Josie','Peters'));
// it will also error out if the line below runs like this in the same way
//console.log(thirdFullName('Susan','Reeves'));

// FUNCTION DECLARATION
// hoisting >> if this function is called first, JS will "look it up" and run it
function fullName(first : string, last : string) : string {
    return first + " " + last
}

// FUNCTION EXPRESSION
// expressions have to be defined before they can be called
// useful for Angular 2 applications
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
    return first + " " + last
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
    return first + " " + last
}

