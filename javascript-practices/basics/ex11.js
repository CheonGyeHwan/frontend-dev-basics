/*
Array 메서드(Array.prototype.*)
*/

var colors = ["black", "white", "yellow"];
var fruits = ["apple", "mango", "banana"];

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push : stack 지원
var color = colors.pop();
console.log(color, colors);

colors.push("red");
console.log(colors);

// join
var str = fruits.join(":");
console.log(str);

// reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

// shift
var numbers = [1000, 3000, 2000, 4000, 5000];
var number = numbers.shift();
console.log(number, numbers);

// sort
numbers.sort();
console.log(numbers);

// slice
var numbers = numbers.slice(1, 3);
console.log(numbers);

// splice
// index부터 count개를 삭제한 후, 삭제된 요소를 반환
console.log(fruits);
var fruits2 = fruits.splice(0 /* index */, 2 /* count */);
console.log(fruits2, fruits);

// index부터 count개를 삭제한 후, replace로 대체, 삭제된 요소를 반환
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a2, a1);

// a1.removeAt(1)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 1);
console.log(a2, a1);

// a1.insertAt(1, 10)
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 0, 10);
console.log(a2, a1);