// The strenght of classes come from the capability of being able to use the concept of inheritance, which means that you have the ability to create abstract classes and classes that have high level of functionality, and you then implement inherited classes that are specialized versions of that class
// And abstract class is a class that would never really be called by itself, but would only be used for inheritance purposes, to create other classes from it

// Specifying behaviors for the Report class
class Report {
    companyProfile : string;

    constructor(public name: string) {
        this.companyProfile = name;
    }
}

// Specifying behaviors for the Invoice class
class Invoice extends Report { // an Invoice is a specialized type of a Report, so it inherits from that class
    constructor(public name : string, public total : number) {
        super(name);
    }
    printInvoice() {
        return this.name + ", $" + this.total;
    }
}

// Specifying behaviors for the BillOfLading class
class BillOfLading extends Report {
    constructor(public name : string, public city : string, public state : string) {
        super(name);
    }
    printBol() {
        return this.name + ", " + this.city + ", " + this.state;
    }
}

// Creating a new Invoice
var invoice = new Invoice('Google', 200);
// Creating a new Invoice
var invoiceTwo = new Invoice('Yahoo', 2000);
// Creating a new BillOflading
var bol = new BillOfLading('GameStop', 'Frederick', 'Maryland');

// Using the method from the Report class
console.log(invoice.companyProfile);
// Using the method from the Invoice class
console.log(invoiceTwo.printInvoice());
// Using the method from the Report class
console.log(bol.companyProfile)
// Using the method from the BillOfLading class
console.log(bol.printBol());