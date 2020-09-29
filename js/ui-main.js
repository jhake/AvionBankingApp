"use strict"

const mainElement = document.querySelector("main")

const headerHomeBtn = document.getElementById("headerHomeBtn")
const headerDepositBtn = document.getElementById("headerDepositBtn")
const headerWithdrawBtn = document.getElementById("headerWithdrawBtn")
const headerSendBtn = document.getElementById("headerSendBtn")
const headerProfileBtn = document.getElementById("headerProfileBtn")
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
        headerProfileBtn.classList.add("hidden")
        headerLogoutBtn.classList.add("hidden")
        headerLoginBtn.classList.remove("hidden")
        headerRegisterBtn.classList.remove("hidden")
    } else {
        headerDepositBtn.classList.remove("hidden")
        headerWithdrawBtn.classList.remove("hidden")
        headerSendBtn.classList.remove("hidden")
        headerProfileBtn.classList.remove("hidden")
        headerLogoutBtn.classList.remove("hidden")
        headerLoginBtn.classList.add("hidden")
        headerRegisterBtn.classList.add("hidden")
    }

    for(let headerBtn of headerBtnList.children) {
        headerBtn.classList.remove("active")
    }

    switch(bankApp.activeTab) {
        case activeTabs.HOME:
            headerHomeBtn.classList.add("active")
            break
        case activeTabs.DEPOSIT:
            headerDepositBtn.classList.add("active")
            break
        case activeTabs.WITHDRAW:
            headerWithdrawBtn.classList.add("active")
            break
        case activeTabs.SEND:
            headerSendBtn.classList.add("active")
            break
        case activeTabs.LOGIN:
            headerLoginBtn.classList.add("active")
            break
        case activeTabs.REGISTER:
            headerRegisterBtn.classList.add("active")
            break
        case activeTabs.PROFILE:
            headerProfileBtn.classList.add("active")
            break
        case activeTabs.LOGOUT:
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