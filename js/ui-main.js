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

const overlayContainer = document.getElementById("overlayContainer")

headerHomeBtn.onclick = () => {generateHomeHtml()}
headerLoginBtn.onclick = () => {generateLoginHtml()}
headerLogoutBtn.onclick = () => {logout()}
headerDepositBtn.onclick = () => {generateDepositHtml()}
headerWithdrawBtn.onclick = () => {generateWithdrawHtml()}
headerSendBtn.onclick = () => {generateSendHtml()}
headerRegisterBtn.onclick = () => {generateRegisterHtml()}
headerProfileBtn.onclick = () => {generateProfileHtml()}

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

    // bankApp.login("Jhake", "password1")
    // bankApp.deposit(1000)
    // bankApp.withdraw(200)
    // generateProfileHtml()
}

const customAlert = function(message, color) {
    if(color === undefined) color = "#000"

    let alertBox = document.createElement("div")
    alertBox.className = "alert"
    alertBox.innerHTML = '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">×</span>' + message
    alertBox.setAttribute("style", `background: ${color}`)

    setTimeout(() => alertBox.remove(), 2000)

    overlayContainer.appendChild(alertBox)
}