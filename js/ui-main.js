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