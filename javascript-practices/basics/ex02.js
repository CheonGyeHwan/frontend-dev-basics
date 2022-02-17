/*
변수와 데이터 타입
[기본 타입]
  - undefined
  - number
  - string
  - boolean

[객체] 
  - object
    - 1. new 생성자함수() 사용해서 생성
      - Number() => object type
      - String() => object type
      - Boolean() => object type
      - Object() => object type
      - Array() => object type
    - 2. {} => 객체 리터럴, JSON(JavaScript Object Notation)
    - 3. [] => 배열 리터럴
    - 4. null

  - function
    - 1. function f() {...}
    - 2. var f = function() {...}
    - 3. var f = new Function(...)
*/

/* 
JavaScript 객체를 구분하는 또 다른 방법
  - 1. 내장(Built-in, Native, Engine) 객체
    - JavaScript Engine 안에 미리 내장되어 있는 객체
      - Number, Boolean, Date, RegExp, ... : 생성자 함수
      - setTimeout, parseInt, ...          : 일반 함수

  - 2. 호스트 객체
    - JavaScript Engine이 Embed된 환경(호스트)의 객체
      - 호스트 환경이 브라우저 : document, location, XmlHttpRequest, window, ...
      - 호스트 환경이 노드(node.js) : os, http, fs, path, ... 

  - 3. 사용자 객체
    - JavaScript Engine이 실행되면서 생성되는 객체들
*/

console.log("=======[기본 타입]========")
var u = undefined; // var u; ==> 선언과 정의의 구분이 없다.
var i = 10;
var s = "hello world";
var b = true;

console.log("u : " + typeof(u));
console.log("i : " + typeof(i));
console.log("s : " + typeof(s));
console.log("b : " + typeof(b));

console.log("=======[객체1 : object type]========")
var i2 = new Number(1);
var s2 = new String("Hello World");
var b2 = new Boolean(false);
var o = new Object();
var a = new Array(); // 배열도 객체

var o2 = {};
var a2 = [];

var n = null;

console.log("i2 : " + typeof(i2));
console.log("s2 : " + typeof(s2));
console.log("b2 : " + typeof(b2));
console.log("o : " + typeof(o));
console.log("a : " + typeof(a));
console.log("o2 : " + typeof(o2));
console.log("a2 : " + typeof(a2));
console.log("n : " + typeof(n));

console.log("=======[객체2 : function type]========")
function f1(a, b) {
    return a + b;
}

var f2 = function(a, b) {
    return a + b;
}

var f3 = new Function("a", "b", "return a + b;");

console.log("f1 : " + typeof(f1));
console.log("f2 : " + typeof(f2));
console.log("f3 : " + typeof(f3));

console.log("=======[원시 타입과 원시 타입의 Wrapper 객체는 구분없이 사용 가능]========")
console.log(i + i2);
console.log(s + s2);

// 원시 타입에 메서드가 호출될 때
// 임시 Wrapper 객체가 생성되어 메서드 호출이 일어난 뒤 사라짐 ====> 유사 객체
console.log("=======[원시 타입도 메서드 호출이 가능]========")
console.log(b.valueOf()); // JS Engine 안에서 new Boolean(b).valueOf() =====> 유사 객체 (호출 뒤에 사라짐)
console.log(b2.valueOf());
