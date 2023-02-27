"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Customer = void 0;
var account_1 = require("./account");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(acountId, balance, type, customerId, lasteName, firstName, adress, state, phone, email) {
        var _this = _super.call(this, acountId, balance, type) || this;
        _this.customerId = customerId;
        _this.lasteName = lasteName;
        _this.firstName = firstName;
        _this.adress = adress;
        _this.state = state;
        _this.phone = phone;
        _this.email = email;
        return _this;
    }
    // getTypeFromAccount(){
    //     return super.getType();
    // };
    // getBalanceFromAccount(){
    //     return super.getBalance();
    // };
    Customer.prototype.getFullNameOfClient = function () {
        return "".concat(this.firstName, "  ").concat(this.lasteName);
    };
    ;
    Customer.prototype.infCustomer = function () {
        return "The account holder is ".concat(this.lasteName, "  ").concat(this.firstName, " \n") +
            "The Adress is ".concat(this.adress, " \n") +
            "The Balancing is : ".concat(this.getBalance(), "  and the type of compte is ").concat(this.getType(), " \n") +
            "The account was opened in ".concat(this.state, " \n") +
            "The phone number : ".concat(this.phone, " \n") +
            "The E-mail: ".concat(this.email, " \n");
    };
    return Customer;
}(account_1.Account));
exports.Customer = Customer;
