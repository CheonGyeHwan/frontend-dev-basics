/*
Array 확장(prototype 기반의 확장) : List 메서드 추가
*/

Array.prototype.remove = function(index) {
    this.splice(index, 1);
}

Array.prototype.insert = function(index, value) {
    if (value instanceof Array) {
        // for(var i = 0; i < value.length; i++) {
        //     this.splice(index++, 0, value[i]);
        // }

        // 오류!!!
        // 콜백 안의 this는 예측 못한다.(어휘상의 this와 일치하지 않는다.)
        // value.forEach(function(e) {
        //     this.splice(index++, 0, e);
        // })

        // 해결 방법1
        // var _this = this;
        // value.forEach(function(e) {
        //     _this.splice(index++, 0, e);
        // })

        // 해결 방법2 : 함수의 bind로 함수 실행 때의 this를 세팅해줄 수 있다.
        // 아래 코드와 동일한 코드
        // var f = function(e) {
        //     this.splice(index++, 0, e);
        // };
        // value.forEach(f.bind(this));

        // 해결 방법2
        value.forEach(function(e) {
            this.splice(index++, 0, e);
        }.bind(this));
    
    } else {
        this.splice(index, 0, value);
    }
}

// List로 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2, 3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2, ["a", "b", "c"]); // 기대 : [1, 2, 'a', 'b', 'c']
console.log(a);               // 결과 : [1, 2, ['a', 'b', 'c'], 3]