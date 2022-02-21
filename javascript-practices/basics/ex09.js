/*
JavaScript 객체4 : prototype 기반의 상속과 오버라이딩(JavaScript 객체지향 프로그래밍)
*/
var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = "POSCOICT";
MyObject.prototype.course = "신입사원교육";
MyObject.prototype.info = function() {
    console.log(this.name + " , " + this.age + " , " + this.school + " , " + this.course);
};

// MyObject1 객체 생성
var o1 = new MyObject("둘리", 10);
o1.info();
o1.school = "BIT ACADEMY";
o1.info();