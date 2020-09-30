"use strict"

const generateWithdrawHtml = function() {
    mainElement.innerHTML = '<div class="container withdraw-container">'+
    '            <h2>Withdraw</h2>'+
    '            <form id="withdrawForm" action="javascript:void(0);">'+
    '                <label for="withdrawAmount">Amount</label>'+
    '                <input type="number" id="withdrawAmount" placeholder="Amount" required>'+
    '                <button id="withdrawSubmit">Withdraw</button>'+
    '            </form>'+
    '        </div>';
        
    attachWithdrawListeners()
    bankApp.activeTab = activeTabs.WITHDRAW
    updateHeader()
}

const attachWithdrawListeners = function() {
    document.getElementById("withdrawForm").onsubmit = withdraw
}

const withdraw = function() {
    let withdrawAmount = document.getElementById("withdrawAmount")

    alertErrorCatcher(() => bankApp.withdraw(withdrawAmount.value))

    customAlert(`Successfully withdrawn ${moneyFormatter(withdrawAmount.value)}`, "#070")
    updateHeader()
    generateHomeHtml()
}
