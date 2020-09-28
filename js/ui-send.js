"use strict"

const generateSendHtml = function() {
    mainElement.innerHTML = '<div class="container send-container">'+
    '            <h2>Send</h2>'+
    '            <form id="sendForm" action="javascript:void(0);">'+
    '                <input type="text" id="sendRecepient">'+
    '                <input type="number" id="sendAmount">'+
    '                <button id="sendSubmit">Send</button>'+
    '            </form>'+
    '        </div>'
        
    attachSendListeners()
}

const attachSendListeners = function() {
    document.getElementById("sendSubmit").onclick = send
}

const send = function() {
    let sendRecepient = document.getElementById("sendRecepient")
    let sendAmount = document.getElementById("sendAmount")

    alertErrorCatcher(() => bankApp.send(sendRecepient.value, sendAmount.value))
    modifyHeader()
    generateHomeHtml()
}
