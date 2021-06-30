// The strenght of classes come from the capability of being able to use the concept of inheritance, which means that you have the ability to create abstract classes and classes that have high level of functionality, and you then implement inherited classes that are specialized versions of that class
// And abstract class is a class that would never really be called by itself, but would only be used for inheritance purposes, to create other classes from it
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Specifying behaviors for the Report class
var Report = /** @class */ (function () {
    function Report(name) {
        this.name = name;
        this.companyProfile = name;
    }
    return Report;
}());
// Specifying behaviors for the Invoice class
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    function Invoice(name, total) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.total = total;
        return _this;
    }
    Invoice.prototype.printInvoice = function () {
        return this.name + ", $" + this.total;
    };
    return Invoice;
}(Report));
// Specifying behaviors for the BillOfLading class
var BillOfLading = /** @class */ (function (_super) {
    __extends(BillOfLading, _super);
    function BillOfLading(name, city, state) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.city = city;
        _this.state = state;
        return _this;
    }
    BillOfLading.prototype.printBol = function () {
        return this.name + ", " + this.city + ", " + this.state;
    };
    return BillOfLading;
}(Report));
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
console.log(bol.companyProfile);
// Using the method from the BillOfLading class
console.log(bol.printBol());
