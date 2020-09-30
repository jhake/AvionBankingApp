"use strict"

const generateSendHtml = function() {
    mainElement.innerHTML = '<div class="container send-container">'+
    '            <h2>Send</h2>'+
    '            <form id="sendForm" action="javascript:void(0);">'+
    '                <label for="sendReceiver">Recipient</label>'+
    '                <input type="text" id="sendReceiver" placeholder="Recipient" required>'+
    '                <label for="sendAmount">Amount</label>'+
    '                <input type="number" id="sendAmount" placeholder="Amount" required>'+
    '                <button id="sendSubmit">Send</button>'+
    '            </form>'+
    '        </div>'
        
    attachSendListeners()
    bankApp.activeTab = activeTabs.SEND
    updateHeader()
}

const attachSendListeners = function() {
    document.getElementById("sendForm").onsubmit = send
    document.getElementById("sendReceiver").onchange = showReceiver
}

const send = function() {
    let sendReceiver = document.getElementById("sendReceiver")
    let sendAmount = document.getElementById("sendAmount")

    alertErrorCatcher(() => bankApp.send(sendReceiver.value, sendAmount.value))
    
    customAlert(`Successfully sent ${sendAmount.value} to ${moneyFormatter(sendReceiver.value)}`, "#070")
    updateHeader()
    generateHomeHtml()
}

const showReceiver = function() {
    let sendReceiver = document.getElementById("sendReceiver")
    let profileCard = document.querySelector(".profile-card")
    let sendForm = document.getElementById("sendForm")

    let user = bankApp.getUserByName(sendReceiver.value)

    let newProfileCard = generateProfileCard(user)

    if(profileCard != undefined){
        sendForm.replaceChild(newProfileCard, profileCard)
    } else {
        sendReceiver.after(newProfileCard)
    }
}