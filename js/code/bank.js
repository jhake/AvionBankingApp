"use strict"

class Bank {
    constructor() {
        this.users = []
        this.transactions = []
    }
    createUser(name, password) {
        if(!isString(name)) throw new WrongArgumentsError("name")
        if(!isString(password)) throw new WrongArgumentsError("password")

        let checkUser = this.getUserByName(name)
        if(checkUser !== null) throw new UserAlreadyExistsError(name)

        let newUser = new User(name, password)
        this.users.push(newUser)
        return newUser
    }
    changeName(name, newName) {
        if(!isString(name)) throw new WrongArgumentsError("name")
        if(!isString(newName)) throw new WrongArgumentsError("newName")

        let user = this.getUserByName(name)
        if(user === null) throw new UserDoesNotExistError(name)

        let checkUser = this.getUserByName(newName)
        if(checkUser !== null) throw new UserAlreadyExistsError(name)

        user.name = name
    }
    changePictureUrl(name, url) {
        if(!isString(name)) throw new WrongArgumentsError("name")
        if(!isString(url)) throw new WrongArgumentsError("url")

        let user = this.getUserByName(name)
        if(user === null) throw new UserDoesNotExistError(name)

        if(!checkImageUrl(url)) throw new InvalidImageUrl(url)

        user.pictureUrl = url
    }
    deposit(name, amount) {
        if(!isString(name)) throw new WrongArgumentsError("name")
        if(!isPositiveReal(amount)) throw new WrongArgumentsError("amount")
        amount = Number(amount)

        let user = this.getUserByName(name)
        if(user === null) throw new UserDoesNotExistError(name)

        user.deposit(amount)
        this.transactions.push(new Transaction(user, transactionType.DEPOSIT, null, amount))
    }
    withdraw(name, amount) {
        if(!isString(name)) throw new WrongArgumentsError("name")
        if(!isPositiveReal(amount)) throw new WrongArgumentsError("amount")
        amount = Number(amount)

        let user = this.getUserByName(name)
        if(user === null) throw new UserDoesNotExistError(name)
        
        user.withdraw(amount)
        this.transactions.push(new Transaction(user, transactionType.WITHDRAW, null, amount))
    }
    getBalance(name) {
        if(!isString(name)) throw new WrongArgumentsError("name")

        let user = this.getUserByName(name)
        if(user === null) throw new UserDoesNotExistError(name)
        return user.balance
    }
    send(senderName, receiverName, amount) {
        if(!isString(senderName)) throw new WrongArgumentsError("senderName")
        if(!isString(receiverName)) throw new WrongArgumentsError("receiverName")
        if(!isPositiveReal(amount)) throw new WrongArgumentsError("amount")
        amount = Number(amount)

        let sender = this.getUserByName(senderName)
        if(sender === null) throw new SenderDoesNotExistError(senderName)

        let receiver = this.getUserByName(receiverName)
        if(receiver === null) throw new ReceiverDoesNotExistError(receiverName)

        if(sender === receiver) throw new SendToSelfError()

        sender.withdraw(amount)
        receiver.deposit(amount)
        
        this.transactions.push(new Transaction(sender, transactionType.SEND, receiver, amount))
    }
    getUserByName(name) {
        for(let user of this.users) {
            if(user.name === name) return user
        }
        return null
    }
}
