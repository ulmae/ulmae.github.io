var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Ulma', 'Escobar'));
// Immediatetly invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Mary', 'Hudgens');
