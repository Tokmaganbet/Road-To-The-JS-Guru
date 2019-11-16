
let a = [121, 32, 2, -100, 4.5, 2300]

let b = a.map(item => {
    return item * 3
})
console.log(b)

let c = a.filter(item => {
    if(item % 2 == 0) {
        return true
    }
})

console.log(c)