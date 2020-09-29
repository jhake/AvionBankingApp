"use strict"

const generateProfileHtml = function() {
    mainElement.innerHTML = '<div class="container profile-container">'+
    '            <h2>Profile</h2>'+
    '            <a href="#" id="profileChangeNameBtn">Change Name</a>'+
    '            <a href="#" id="profileChangePictureBtn">Change Picture</a>'+
    '            <h3>Balance</h3>'+
    '            <p></p>'+
    '            <h3>Transaction History</h3>'+
    '            <ul></ul>'+
    '        </div>'

    const profileContainer = document.querySelector(".profile-container")
    profileContainer.querySelector("p").innerHTML = moneyFormatter(bankApp.userLoggedIn.balance)
    
    profileContainer.querySelector("h2").after(generateProfileCard(bankApp.userLoggedIn))

    generateBalanceLists().forEach( li => {
        profileContainer.querySelector("ul").appendChild(li)
    })
    attachProfileListeners()
    bankApp.activeTab = activeTabs.PROFILE
    updateHeader()
}

const attachProfileListeners = function() {
    document.getElementById("profileChangeNameBtn").onclick = changeName
    document.getElementById("profileChangePictureBtn").onclick = changePictureUrl
}

const generateBalanceLists = function() {
    let liArray = []

    for(let transaction of bankApp.bank.transactionHistory) {
        let newLi = document.createElement("li")
        let descriptionElement = document.createElement("p")
        let amountElement = document.createElement("span")

        if(transaction.user === bankApp.userLoggedIn) {
            if(transaction.type === transactionType.SEND) {
                descriptionElement.innerHTML = transaction.senderString()
            } else {
                descriptionElement.innerHTML = transaction.typeString()
            }
        } else if(transaction.receiver === bankApp.userLoggedIn) {
            descriptionElement.innerHTML = transaction.receiverString()
        } else {
            continue
        }

        let realAmount

        if(transaction.type === transactionType.SEND || transaction.type === transactionType.WITHDRAW) {
            realAmount = -transaction.amount
        } else {
            realAmount = transaction.amount
        }
        amountElement.innerHTML = moneyFormatter(realAmount)

        newLi.appendChild(descriptionElement)
        newLi.appendChild(amountElement)
        liArray.push(newLi)
    }

    return liArray.reverse()
}

const changePictureUrl = function() {
    let newUrl = prompt("Enter new picture URL")
    if(!newUrl) return

    bankApp.changePictureUrl(newUrl)
    generateProfileHtml()
}

const changeName = function() {
    let newName = prompt("Enter new name")
    if(!newName) return

    bankApp.changeName(newName)
    generateProfileHtml()
}
