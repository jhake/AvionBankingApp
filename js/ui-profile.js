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

    for(let transaction of bankApp.getTransactions()) {
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

    alertErrorCatcher(() => bankApp.changePictureUrl(newUrl))
    generateProfileHtml()
}

const changeName = function() {
    let newName = prompt("Enter new name")
    if(!newName) return

    alertErrorCatcher(() => bankApp.changeName(newName))
    generateProfileHtml()
}

const generateProfileCard = (user) => {
    let profileCard = document.createElement("div")
    profileCard.className = "profile-card"

    if(user === null) {
        profileCard.classList.add("profile-card-unknown")
        let nameElement = document.createElement("p")
        nameElement.innerHTML = "User doesn't exist"
        profileCard.appendChild(nameElement)
        return profileCard
    }

    let pictureElement = document.createElement("img")
    if(user.pictureUrl === null) {
        pictureElement.src = "https://steamuserimages-a.akamaihd.net/ugc/885384897182110030/F095539864AC9E94AE5236E04C8CA7C2725BCEFF/"
    } else {
        pictureElement.src = user.pictureUrl
    }

    let nameElement = document.createElement("p")
    nameElement.innerHTML = user.name

    profileCard.appendChild(pictureElement)
    profileCard.appendChild(nameElement)

    return profileCard
}