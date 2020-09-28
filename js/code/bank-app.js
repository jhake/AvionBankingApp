"use strict"

class BankApp {
    constructor() {
        this.bank = new Bank()
        this.userLoggedIn = null
    }
    login(name, password) {
        let user = this.bank.getUserByName(name)
        if(user === null) throw new LoginError()
        if(user.password !== password) throw new LoginError()

        this.userLoggedIn = user
    }
    logout() {
        this.userLoggedIn = null
    }
    withdraw(amount) {
        if(this.userLoggedIn === null) throw new NotLoggedInError()
        this.bank.withdraw(this.userLoggedIn.name, amount)
    }
    deposit(amount) {
        if(this.userLoggedIn === null) throw new NotLoggedInError()
        this.bank.deposit(this.userLoggedIn.name, amount)
    }
    send(receiverName, amount) {
        if(this.userLoggedIn === null) throw new NotLoggedInError()
        this.bank.send(this.userLoggedIn.name, receiverName, amount)
    }
    register(name, password) {
        this.userLoggedIn = this.bank.createUser(name, password)
    }
}