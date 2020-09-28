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