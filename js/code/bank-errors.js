"use strict"

class BankError extends Error {
    constructor(message) {
        super(message)
        this.name = "BankError"
    }
}

class WrongArgumentsError extends BankError {
    constructor(argumentName) {
        super(`Wrong argument for ${argumentName}`)
        this.name = "WrongArgumentsError"
    }
}

class UserAlreadyExistsError extends BankError {
    constructor(username) {
        super(`User "${username}" already exists`)
        this.name = "UserAlreadyExistsError"
        this.username = username
    }
}

class UserDoesNotExistError extends BankError {
    constructor(username) {
        super(`User "${username}" doesn't exist`)
        this.name = "UserDoesNotExistError"
        this.username = username
    }
}

class SendToSelfError extends BankError {
    constructor() {
        super("Cannot send money to yourself")
        this.name = "SendToSelfError"
    }
}

class SenderDoesNotExistError extends UserDoesNotExistError {
    constructor(username) {
        super(username)
        this.name = "SenderDoesNotExistError"
        this.username = username
    }
}

class ReceiverDoesNotExistError extends UserDoesNotExistError {
    constructor(username) {
        super(username)
        this.name = "ReceiverDoesNotExistError"
        this.username = username
    }
}
