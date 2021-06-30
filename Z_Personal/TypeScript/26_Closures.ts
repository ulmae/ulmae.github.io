function nameFunction(name : string) : void {
    // void means it doesn't return a value (for example, when you just want to show a console log)
    var n : string = name;

    function printName() {
        console.log(n);
    }

    printName();
}

nameFunction('Ulma');

// * * * * * * * * * * ** * * * * * *

function nameFunction2(name : string) {
    var n : string = name;

    return function() {
        console.log(n);
    }
}

var secondName = nameFunction2('Haruhi');
secondName();

// * * * * * * * * * * ** * * * * * *

function lineup() {
    var nowBatting : number = 1;

    return {
        nextBatter() { nowBatting++ },
        currentBatter() { return nowBatting }
    }
}

let batters = lineup();


// Whatever these closures do, they end up being similar to how you make macros for Excel, sort of object oriented, because you can do things with "batters" due to the function you created above
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
