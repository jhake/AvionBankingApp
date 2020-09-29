"use strict"

const isString = function(s) {
    return typeof(s) === 'string' || s instanceof String;
}

const isPositiveReal = function(num) {
    if(isNaN(num)) {
        return false
    } else if(num < 0) {
        return false
    } else {
        return true
    }
}

const alertErrorCatcher = function(fn) {
    try {
        fn()
    } catch(error) {
        alert(error)
        throw error
    }
}

var moneyFormatter = function(num) {
    let formattedString = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num)

    if(num >= 0) {
        formattedString = "+" + formattedString
    }

    return formattedString
}