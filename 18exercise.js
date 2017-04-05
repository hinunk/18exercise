let timeCode = `


`
let n = 0

var clock = setInterval(function () {
    if (n === timeCode.length) {
        clearInterval(clock)
    }
    n += 1
    document.querySelector('code').innerHTML = timeCode.substring(0, n)
}, 50)
