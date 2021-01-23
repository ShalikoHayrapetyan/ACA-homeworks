/*2.Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and
return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the
balance, if amount is less than the balance, otherwise output “Amount exceeded
balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the
amount from the account balance and add it to the given anotherAccount and return the
updated balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which
gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.
 */

class Account {
    constructor(id, name, balance) {
        this.id = id
        this.name = name
        this.balance = +balance
    }

    get getAccount() {
        return ` I am ${this.name} my id is ${ this.id} my balance is ${this.balance}`
    }

    set setNameAndBalance(obj) {
        this.name = obj.name
        this.balance = obj.balance
    }
    credit(amount) {
        this.balance += amount
    }
    debit(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
        } else return "Amount exceeded  balance"
    }
    transferTo(anotherAccount, amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            anotherAccount.balance += amount
            return this.balance
        } else return "Amount exceeded balance."
    }
    static toString(account) {
        for (let key in account) {
            account[key] += ""
        }

    }
    static identifyAccounts(accountFirst, accountSecond) {
        this.toString(accountFirst)
        this.toString(accountSecond)
        if (accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance) {
            return "they are the same"
        } else return "they are not the same"
    }
}

let ac1 = new Account(1, "bbb", 2000)
let ac2 = new Account("1", "bbb", 2000)
ac1.credit(300)
ac1.debit(200)
ac1.transferTo(ac2, 50)
console.log(Account.identifyAccounts(ac1, ac2))