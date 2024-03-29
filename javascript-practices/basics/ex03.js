/* null과 undefined */

var myVar1 = undefined; // 명시적으로 undefined 대입
var myVar2;             // 암시적으로 undefined 대입된다.
var myVar3 = null;      // null 객체를 대입

console.log(myVar1 + " : " + myVar3);
console.log(typeof(myVar1) + " : " + typeof(myVar3));

console.log(myVar1 == myVar3);  // 값 비교
console.log(myVar1 === myVar3); // 값 비교 + 타입 비교

console.log("========================================");

// == : equality, 값의 동치성, 형변환
console.log(4 == "4");
console.log(false == 0);
console.log("abc" == new String("abc"));

console.log(true + 10); // 11
console.log("abc" + new String("abc")); // abcabc
console.log(1 + "1"); // 11 (Number가 String으로 변환, 순서 무관)
console.log("1" + 1); // 11 (Number가 String으로 변환, 순서 무관)

console.log("========================================");

// === : identity
// 1. 타입의 동일성 + 값의 동일성 : 원시 타입
// 2. 객체의 동일성 : 객체
console.log("2" === 2);
console.log(true === 1);
console.log(2 === 4);
console.log(new Number(4) === new Number(4));
