"use strict"

const generateHomeHtml = function() {
    mainElement.innerHTML ='<div class="container home-container">'+
    '            <h1>Welcome to our Banking App</h1>'+
    '            <p>Please login or register to start using the app</p>'+
    '        </div>'    

    if(bankApp.userLoggedIn !== null) {
        mainElement.querySelector("h1").innerHTML = `Welcome to our Banking App, ${bankApp.userLoggedIn.name}`
        mainElement.querySelector("p").innerHTML = `Your current balance is: ${bankApp.userLoggedIn.balance}`
    }

    modifyHeader()
}