"use strict"

class BankApp {
    constructor() {
        this.bank = new Bank()
        this.userLoggedIn = null
        this.activeTab = "home"
    }
    login(name, password) {
        let user = this.bank.getUserByName(name)
        if(user === null) throw new LoginError()
        if(!user.checkPassword(password)) throw new LoginError()

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
    changeName(name) {
        this.bank.changeName(this.userLoggedIn.name, name)
    }
    changePictureUrl(url) {
        this.bank.changePictureUrl(this.userLoggedIn.name, url)
    }
    getUserByName(name) {
        return this.bank.getUserByName(name)
    }
    getTransactions() {
        return this.bank.transactions
    }
}