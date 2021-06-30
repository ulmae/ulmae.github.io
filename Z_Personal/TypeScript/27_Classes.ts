// This creates a class and it creates things you can call that refer to a variable that is created with this class, you must provide certain inputs and also specify which methods you can use (not sure about the wording)
class Invoice {
    companyProfile : string;

    constructor(public name, public city, public state) {
        this.companyProfile = name + ", " + city + ", " + state;
    }
}

var googleInvoice =  new Invoice('Google', 'Mountain View', 'State');
var yahooInvoice =  new Invoice('Yahoo', 'San Francisco', 'California');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);