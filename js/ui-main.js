"use strict"

const mainElement = document.querySelector("main")

const headerHomeBtn = document.getElementById("headerHomeBtn")
const headerDepositBtn = document.getElementById("headerDepositBtn")
const headerWithdrawBtn = document.getElementById("headerWithdrawBtn")
const headerSendBtn = document.getElementById("headerSendBtn")
const headerLogoutBtn = document.getElementById("headerLogoutBtn")
const headerLoginBtn = document.getElementById("headerLoginBtn")
const headerRegisterBtn = document.getElementById("headerRegisterBtn")

headerHomeBtn.onclick = () => {generateHomeHtml()}
headerLoginBtn.onclick = () => {generateLoginHtml()}
headerLogoutBtn.onclick = () => {logout()}
headerDepositBtn.onclick = () => {generateDepositHtml()}
headerWithdrawBtn.onclick = () => {generateWithdrawHtml()}
headerSendBtn.onclick = () => {generateSendHtml()}
headerRegisterBtn.onclick = () => {generateRegisterHtml()}

const modifyHeader = function() {
    if(bankApp.userLoggedIn === null) {
        headerHomeBtn.classList.remove("hidden")
        headerDepositBtn.classList.add("hidden")
        headerWithdrawBtn.classList.add("hidden")
        headerSendBtn.classList.add("hidden")
        headerLogoutBtn.classList.add("hidden")
        headerLoginBtn.classList.remove("hidden")
        headerRegisterBtn.classList.remove("hidden")
    } else {
        headerHomeBtn.classList.remove("hidden")
        headerDepositBtn.classList.remove("hidden")
        headerWithdrawBtn.classList.remove("hidden")
        headerSendBtn.classList.remove("hidden")
        headerLogoutBtn.classList.remove("hidden")
        headerLoginBtn.classList.add("hidden")
        headerRegisterBtn.classList.add("hidden")
    }
}

window.onload = () => {
    generateHomeHtml()
}