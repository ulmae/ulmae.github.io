// This creates a class and it creates things you can call that refer to a variable that is created with this class, you must provide certain inputs and also specify which methods you can use (not sure about the wording)
var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'Mountain View', 'State');
var yahooInvoice = new Invoice('Yahoo', 'San Francisco', 'California');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
