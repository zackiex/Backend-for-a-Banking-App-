"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(acountId, balance, type, description) {
        this.acountId = acountId;
        this.balance = balance;
        this.type = type;
        this.description = description;
    }
    Account.prototype.getInfo = function () {
        console.log("The Balance: " + this.balance + "\n" +
            "The Type of Account: " + this.type + "\n" +
            "Description: " + this.description + "\n");
    };
    Account.prototype.getType = function () {
        return "".concat(this.type);
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.setBalance = function (amout) {
        return this.balance = this.balance + amout;
    };
    return Account;
}());
exports.Account = Account;
