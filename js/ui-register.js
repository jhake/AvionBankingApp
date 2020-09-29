"use strict"

const generateRegisterHtml = function() {
    mainElement.innerHTML = '<div class="container register-container">'+
    '            <h2>Register</h2>'+
    '            <form id="registerForm" action="javascript:void(0);">'+
    '                <label for="registerName">Name</label>'+
    '                <input type="text" id="registerName" placeholder="Name">'+
    '                <label for="registerPassword">Password</label>'+
    '                <input type="password" id="registerPassword" placeholder="Password">'+
    '                <label for="registerConfirmPassword">Confirm Passowrd</label>'+
    '                <input type="password" id="registerConfirmPassword" placeholder="Confirm Password">'+
    '                <button id="registerSubmit">Register</button>'+
    '            </form>'+
    '        </div>'

    attachRegisterListeners()
    bankApp.activeTab = activeTabs.REGISTER
    updateHeader()
}

const attachRegisterListeners = function() {
    document.getElementById("registerForm").onsubmit = register
}

const register = function() {
    let registerName = document.getElementById("registerName")
    let registerPassword = document.getElementById("registerPassword")

    alertErrorCatcher(() => bankApp.register(registerName.value, registerPassword.value))
    updateHeader()
    generateHomeHtml()
}
