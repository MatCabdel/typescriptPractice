
class BankCustomer {
  constructor(private name:  string, private password:  string) {
    this.name  =  name;
    this.password  =  password;
}
getName():  string {
  return  `${this.name}`;
}
public verifyPinInput( password: string):  boolean {
  return password === this.password 
}
}

const assert = require("assert");

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

