export const highestValue = (data, time) => {
    var nums = Object.keys(data).map( n => parseInt(n))
    var max = nums.reduce(function(a, b) {
        return Math.max(parseInt(a), parseInt(b));
    }, 0);
    if(max < time) {
        return max
    }
    return Math.max.apply(Math, nums.filter(function (x) { return x <= time }))
}

export const getCodeClass = () => {
    return document.getElementById('code') ? document.getElementById('code').getAttribute('class') : null
}