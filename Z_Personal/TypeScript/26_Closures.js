function nameFunction(name) {
    // void means it doesn't return a value (for example, when you just want to show a console log)
    var n = name;
    function printName() {
        console.log(n);
    }
    printName();
}
nameFunction('Ulma');
// * * * * * * * * * * ** * * * * * *
function nameFunction2(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var secondName = nameFunction2('Haruhi');
secondName();
// * * * * * * * * * * ** * * * * * *
function lineup() {
    var nowBatting = 1;
    return {
        nextBatter: function () { nowBatting++; },
        currentBatter: function () { return nowBatting; }
    };
}
var batters = lineup();
// Whatever these closures do, they end up being similar to how you make macros for Excel, sort of object oriented, because you can do things with "batters" due to the function you created above
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
