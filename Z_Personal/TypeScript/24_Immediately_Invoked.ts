// REGULAR FUNCTION
function fullName (first: string, last: string) {
    return first + " " + last
}

//IMMEDIATELY INVOKED FUNCTION
//used in Angular 2 as well
var names : string[] = ['Jordan', 'Tiffany', 'Kristine'];
var counter : number = 0;

(function() {
    for (let name in names) {
        counter++;
    }
})();

//Notice how you never 'ask' to run neither function like usual? the last () tells it that it is an immediately invoked function
console.log(counter);



