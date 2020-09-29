"use strict"

const generateRegisterHtml = function() {
    mainElement.innerHTML = '<div class="container register-container">'+
    '            <h2>Register</h2>'+
    '            <form id="registerForm" action="javascript:void(0);">'+
    '                <input type="text" id="registerName">'+
    '                <input type="password" id="registerPassword">'+
    '                <button id="registerSubmit">Register</button>'+
    '            </form>'+
    '        </div>'

    attachRegisterListeners()
    bankApp.activeTab = "register"
    updateHeader()
}

const attachRegisterListeners = function() {
    document.getElementById("registerSubmit").onclick = register
}

const register = function() {
    let registerName = document.getElementById("registerName")
    let registerPassword = document.getElementById("registerPassword")

    alertErrorCatcher(() => bankApp.register(registerName.value, registerPassword.value))
    updateHeader()
    generateHomeHtml()
}
