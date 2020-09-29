"use strict"

class User {
    constructor(name, password) {
        this.name = name
        this.password = password
        this.pictureUrl = null
        this.balance = 0
    }
    checkPassword(password) {
        return password === this.password
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
