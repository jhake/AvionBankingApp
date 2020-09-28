"use strict"

const generateLoginHtml = function() {
    mainElement.innerHTML = '<div class="container login-container">'+
    '            <h2>Login</h2>'+
    '            <form id="loginForm" action="javascript:void(0);">'+
    '                <input type="text" id="loginName">'+
    '                <input type="password" id="loginPassword">'+
    '                <button id="loginSubmit">Login</button>'+
    '            </form>'+
    '        </div>'

    attachLoginListeners()
}

const attachLoginListeners = function() {
    document.getElementById("loginSubmit").onclick = login
}

const login = function() {
    let loginName = document.getElementById("loginName")
    let loginPassword = document.getElementById("loginPassword")

    alertErrorCatcher(() => bankApp.login(loginName.value, loginPassword.value))
    modifyHeader()
    generateHomeHtml()
}

const logout = function() {
    bankApp.logout()
    modifyHeader()
    generateHomeHtml()
}