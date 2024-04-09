var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, password) {
        this.name = name;
        this.password = password;
        this.name = name;
        this.password = password;
    }
    BankCustomer.prototype.getName = function () {
        return "".concat(this.name);
    };
    BankCustomer.prototype.verifyPinInput = function (password) {
        return password === this.password;
    };
    return BankCustomer;
}());
var assert = require("assert");
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
