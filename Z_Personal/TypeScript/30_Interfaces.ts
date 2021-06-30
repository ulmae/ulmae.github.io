interface User {
    email : string;
    firstName? : string;
    lastName? : string;
}

function profile(user : User) : string {
    return `Welcome, ${user.firstName} ${user.lastName}`;
}
function profileTwo(user : User) : string {
    return `Welcome, ${user.email}`;
}
// With all the values
var realUser = {
    email : 'watanuki@firstofapril.com',
    firstName: 'Watanuki',
    lastName: 'Kimihiro'
};

 console.log(profile(realUser));
 console.log(realUser.email);

 // * * * * * * * * * * * * * * * *
 console.log('* * * * * * *  *');
// Removing some optional values
 var realUserTwo = {
    email : 'yuuko@butterfly.com',
};

console.log(profileTwo(realUserTwo));