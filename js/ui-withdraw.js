"use strict"

const generateWithdrawHtml = function() {
    mainElement.innerHTML = '<div class="container withdraw-container">'+
    '            <h2>Withdraw</h2>'+
    '            <form id="withdrawForm" action="javascript:void(0);">'+
    '                <input type="number" id="withdrawAmount">'+
    '                <button id="withdrawSubmit">Withdraw</button>'+
    '            </form>'+
    '        </div>';
        
    attachWithdrawListeners()
}

const attachWithdrawListeners = function() {
    document.getElementById("withdrawSubmit").onclick = withdraw
}

const withdraw = function() {
    let withdrawAmount = document.getElementById("withdrawAmount")

    alertErrorCatcher(() => bankApp.withdraw(withdrawAmount.value))
    modifyHeader()
    generateHomeHtml()
}
