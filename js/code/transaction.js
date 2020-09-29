"use strict"

class Transaction {
    constructor(user, transactionType, receiver, amount) {
        this.user = user
        this.type = transactionType
        this.receiver = receiver
        this.amount = amount
    }
    typeString() {
        switch(this.type) {
            case transactionType.DEPOSIT:
                return "Deposit"
            case transactionType.WITHDRAW:
                return "Withdraw"
            case transactionType.SEND:
                return "Send"
        }
    }
    senderString() {
        switch(this.type) {
            case transactionType.DEPOSIT:
                return null
            case transactionType.WITHDRAW:
                return null
            case transactionType.SEND:
                return "Send to " + this.receiver.name
        }
    }
    receiverString() {
        switch(this.type) {
            case transactionType.DEPOSIT:
                return null
            case transactionType.WITHDRAW:
                return null
            case transactionType.SEND:
                return "Receive from " + this.user.name
        }
    }
}