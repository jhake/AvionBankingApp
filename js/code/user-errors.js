"use strict"

class UserError extends Error {
    constructor(message) {
        super(message)
        this.name = "UserError"
    }
}

class NotEnoughMoneyError extends UserError {
    constructor(name, amount) {
        super(`${amount} can't be requested from user "${name}"`)
        this.name = "NotEnoughMoneyError"
    }
}