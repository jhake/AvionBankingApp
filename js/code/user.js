"use strict"

class User {
    constructor(name, password) {
        this.name = name
        this.passwordHash = CryptoJS.MD5(password).toString()
        this.pictureUrl = null
        this.balance = 0
    }
    checkPassword(password) {
        return this.passwordHash === CryptoJS.MD5(password).toString()
    }
    setPicture(url) {
        this.pictureUrl = url
    }
    deposit(amount) {
        this.balance += amount
        return this.balance
    }
    withdraw(amount) {
        if(amount > this.balance) throw new NotEnoughMoneyError(this.name, amount)
        
        this.balance -= amount
        return this.balance
    }
}
