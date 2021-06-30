// REGULAR FUNCTION
function fullName(first, last) {
    return first + " " + last;
}
//IMMEDIATELY INVOKED FUNCTION
var names = ['Jordan', 'Tiffany', 'Kristine'];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
