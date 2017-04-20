/**
 * Created by mac on 3/6/17.
 */
function BankAccount(accountNumber, balance, routingNumber) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.routingNumber = routingNumber;
    this.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;

        }
        return balance;
    }
    this.withdraw = function (amount) {
        if (amount < 0) {
            this.balance += amount;
        }
        return balance;

    }

}

function CheckingAccount(accountNumber, balance, routingNumber, numberOfChecks) {
    BankAccount.call(this, accountNumber, balance, routingNumber)
    this.numberOfChecks = numberOfChecks;

}

CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

function SavingsAccount(accountNumber, balance, routingNumber, interestRate) {
    BankAccount.call(this, accountNumber, balance, routingNumber)
    this.interestRate = interestRate;

}

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

function UserProfile(userId) {
    this.userID = userId;
    this.username = username;
    this.accounts = [];
    this.addAccount = function (account) {
        if(account.isPrototypeOf(BankAccount.prototype)) {
            this.accounts.push(account);

        }
    }
}
function Bank() {
    this.name = name;
    this.location = location;
    this.userProfiles = [];
    this.addUserProfiles = function (userProfile) {
        if(userProfile.isPrototypeOf(userProfile.prototype)) {
            this.userProfiles.push(userProfile);
        }
    }
}

var bankOfEvil = new Bank('Bank of Evil', '1 Main St');
var samson = new UserProfile(1987, 'samsono')
samson.addAccount(new CheckingAccount(12345, 567891, 123456, 4));
bankOfEvil.addUserProfiles(samson);