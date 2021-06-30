console.log(fullName('Mary', 'Williams'));
// the code will error out if the line below runs like this with error otherFullName is not a function
//console.log(otherFullName('Josie','Peters'));
// it will also error out if the line below runs like this in the same way
//console.log(thirdFullName('Susan','Reeves'));
// Function declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
