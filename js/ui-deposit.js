"use strict"

const generateDepositHtml = function() {
    mainElement.innerHTML = '<div class="container deposit-container">'+
    '            <h2>Deposit</h2>'+
    '            <form id="depositForm" action="javascript:void(0);">'+
    '                <label for="depositAmount">Amount</label>'+
    '                <input type="number" id="depositAmount" placeholder="Amount" required>'+
    '                <button id="depositSubmit">Deposit</button>'+
    '            </form>'+
    '        </div>';    

    attachDepositListeners()
    bankApp.activeTab = activeTabs.DEPOSIT
    updateHeader()
}

const attachDepositListeners = function() {
    document.getElementById("depositForm").onsubmit = deposit
}

const deposit = function() {
    let depositAmount = document.getElementById("depositAmount")

    alertErrorCatcher(() => bankApp.deposit(depositAmount.value))

    customAlert(`Successfully deposited ${moneyFormatter(depositAmount.value)}`, "#070")
    updateHeader()
    generateHomeHtml()
}
