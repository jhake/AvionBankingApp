"use strict"

class BankAppError extends Error {
    constructor(message) {
        super(message)
        this.name = "BankAppError"
    }
}

class LoginError extends BankAppError {
    constructor() {
        super("Login error")
        this.name = "LoginError"
    }
}

class NotLoggedInError extends BankAppError {
    constructor() {
        super("You must be logged in to do this")
        this.name = "NotLoggedInError"
    }
}
