"use strict"

const generateDepositHtml = function() {
    mainElement.innerHTML = '<div class="container deposit-container">'+
    '            <h2>Deposit</h2>'+
    '            <form id="depositForm" action="javascript:void(0);">'+
    '                <input type="number" id="depositAmount">'+
    '                <button id="depositSubmit">Deposit</button>'+
    '            </form>'+
    '        </div>';    

    attachDepositListeners()
    bankApp.activeTab = "deposit"
    updateHeader()
}

const attachDepositListeners = function() {
    document.getElementById("depositSubmit").onclick = deposit
}

const deposit = function() {
    let depositAmount = document.getElementById("depositAmount")

    alertErrorCatcher(() => bankApp.deposit(depositAmount.value))
    updateHeader()
    generateHomeHtml()
}
