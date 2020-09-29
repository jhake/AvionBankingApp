"use strict"

const generateHomeHtml = function() {
    mainElement.innerHTML ='<div class="container home-container">'+
    '            <h2>Welcome to our Banking App</h2>'+
    '            <p>Please login or register to start using the app</p>'+
    '        </div>'    

    if(bankApp.userLoggedIn !== null) {
        mainElement.querySelector("h2").innerHTML = `Welcome to our Banking App, ${bankApp.userLoggedIn.name}`
        mainElement.querySelector("p").innerHTML = ""
    }

    bankApp.activeTab = activeTabs.HOME
    updateHeader()
}