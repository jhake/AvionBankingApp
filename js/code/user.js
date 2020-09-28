"use strict"

class User {
    constructor(name, password) {
        this.name = name
        this.password = password
        this.pictureUrl = null
        this.balance = 0
    }
    setPicture(url) {
        this.pictureUrl = url
    }
    deposit(amount) {
        this.balance += amount
        return this.balance
    }
    withdraw(amount) {
        this.balance -= amount
        return this.balance
    }
}