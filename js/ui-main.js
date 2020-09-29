"use strict"

const mainElement = document.querySelector("main")

const headerHomeBtn = document.getElementById("headerHomeBtn")
const headerDepositBtn = document.getElementById("headerDepositBtn")
const headerWithdrawBtn = document.getElementById("headerWithdrawBtn")
const headerSendBtn = document.getElementById("headerSendBtn")
const headerLogoutBtn = document.getElementById("headerLogoutBtn")
const headerLoginBtn = document.getElementById("headerLoginBtn")
const headerRegisterBtn = document.getElementById("headerRegisterBtn")
const headerBtnList = document.querySelector(".header-btn-list")

headerHomeBtn.onclick = () => {generateHomeHtml()}
headerLoginBtn.onclick = () => {generateLoginHtml()}
headerLogoutBtn.onclick = () => {logout()}
headerDepositBtn.onclick = () => {generateDepositHtml()}
headerWithdrawBtn.onclick = () => {generateWithdrawHtml()}
headerSendBtn.onclick = () => {generateSendHtml()}
headerRegisterBtn.onclick = () => {generateRegisterHtml()}

const updateHeader = function() {
    if(bankApp.userLoggedIn === null) {
        headerDepositBtn.classList.add("hidden")
        headerWithdrawBtn.classList.add("hidden")
        headerSendBtn.classList.add("hidden")
        headerLogoutBtn.classList.add("hidden")
        headerLoginBtn.classList.remove("hidden")
        headerRegisterBtn.classList.remove("hidden")
    } else {
        headerDepositBtn.classList.remove("hidden")
        headerWithdrawBtn.classList.remove("hidden")
        headerSendBtn.classList.remove("hidden")
        headerLogoutBtn.classList.remove("hidden")
        headerLoginBtn.classList.add("hidden")
        headerRegisterBtn.classList.add("hidden")
    }

    for(let headerBtn of headerBtnList.children) {
        headerBtn.classList.remove("active")
    }

    switch(bankApp.activeTab) {
        case "home":
            headerHomeBtn.classList.add("active")
            break
        case "deposit":
            headerDepositBtn.classList.add("active")
            break
        case "withdraw":
            headerWithdrawBtn.classList.add("active")
            break
        case "send":
            headerSendBtn.classList.add("active")
            break
        case "login":
            headerLoginBtn.classList.add("active")
            break
        case "register":
            headerRegisterBtn.classList.add("active")
            break
        case "logout":
            headerLogoutBtn.classList.add("active")
            break
        default:
            break
    }
}

window.onload = () => {
    generateHomeHtml()
}

const generateProfileCard = (user) => {
    let profileCard = document.createElement("div")
    profileCard.className = "profile-card"

    if(user === null) {
        profileCard.classList.add("profile-card-unknown")
        let nameElement = document.createElement("h3")
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

    let nameElement = document.createElement("h3")
    nameElement.innerHTML = user.name

    profileCard.appendChild(pictureElement)
    profileCard.appendChild(nameElement)

    return profileCard
}