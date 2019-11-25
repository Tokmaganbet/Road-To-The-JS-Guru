// Counter with closures(замыкания)
function counter() {
    var count = 0;
    
    return function() {
        count++;
        return count;
    }
}

var counter1 = counter();
var counter2 = counter();

console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter1()) // 3

console.log(counter2()) // 1
console.log(counter2()) // 2
console.log(counter2()) // 3

