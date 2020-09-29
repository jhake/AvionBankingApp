"use strict"

const generateSendHtml = function() {
    mainElement.innerHTML = '<div class="container send-container">'+
    '            <h2>Send</h2>'+
    '            <form id="sendForm" action="javascript:void(0);">'+
    '                <label for="sendRecepient">Recipient</label>'+
    '                <input type="text" id="sendRecepient" placeholder="Recipient">'+
    '                <label for="sendAmount">Amount</label>'+
    '                <input type="number" id="sendAmount" placeholder="Amount">'+
    '                <button id="sendSubmit">Send</button>'+
    '            </form>'+
    '        </div>'
        
    attachSendListeners()
    bankApp.activeTab = "send"
    updateHeader()
}

const attachSendListeners = function() {
    document.getElementById("sendSubmit").onclick = send
}

const send = function() {
    let sendRecepient = document.getElementById("sendRecepient")
    let sendAmount = document.getElementById("sendAmount")

    alertErrorCatcher(() => bankApp.send(sendRecepient.value, sendAmount.value))
    updateHeader()
    generateHomeHtml()
}
