/*
구문(statement)
1. 자바 실행 단위
2. 구문의 구성 요소
  - 값, 연산자 : 표현식
  - 주석 : 구문을 구성해도 실행되지 않는다.
  - 예약어들 : if, const, for ...

3. 구문의 예
  - 주석 구문
  - if(1 - 1 == 0) {...}
  - if ~ else
  - switch
  - for, while, do ~ while, for ~ in

4. 공백 : 토큰 분리

5. 세미콜론 ;
  - 원칙적으로 구문을 분리한다. 
  - 표현식을 표현식구문으로 만들어서 표현식을 실행하게 한다.

6. 개행
*/

i = 10; j = 20; i;

// 개행의 역할1 : ; 대체
// 개행의 역할2 : 토큰을 분리
// 언제 1 or 2 : JavaScript Engine의 Phaser가 에러없는 실행을 우선 원칙으로 1번과 2번을 판단해낸다.

// 1)예제
var s = "hello world"
console.log(s)

// 2)예제
a 
=
2 
*
2;

// cf.
// con
// sole.log(a)

i = 10;
console.log(i);

o = { };
f= function() { };

if(o == f) {

}