// code your solution here
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

const mondayWork = function (work = "go to the office") {
    return (`This Monday, I will ${work}.`)
}

function wrapAdjective (symbol = "*") {
    return function (adj = "special") {
        return `You are ${symbol}${adj}${symbol}!`
    }
}