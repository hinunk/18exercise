let timeCode = `
var obj = {
    name:'hak',
    age:'21',
    gender:'male'
}
var study = function(){
    'HyperText Markup Language'
    'Cascading Style Sheet'
    'JavaScript'
    'HyperText Transfer Protocol'
    'Linux'
}
Websites = [
    {Github:},
    {blog:}
]
`
let n = 0

var clock = setInterval(function () {
    if (n === timeCode.length) {
        clearInterval(clock)
    }
    n += 1
    document.querySelector('code').innerHTML = timeCode.substring(0, n)
}, 50)
