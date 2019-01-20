# Javascript:  call(), apply(), bind()

자바스크립트에서 call, bind, apply 이해시키기

## call()

**call()** 메서드는 주어진 `this`값 및 각각 전달된 `arguments`와 함께 함수를 호출합니다.

```javascript
function Product(name, price) {
 	this.name = name;
 	this.price = price;
 }
}
function Food(name, price) {
	Product.call(this, name, price);
	this.category = 'food';
}
```



```javascript
var cheese = new Food('feta', 5);
console.log(cheese);
```

![](https://github.com/gyoungeunbae/Javascript-call-apply-bind-/blob/master/img/output.png?raw=true)






![](https://github.com/gyoungeunbae/Javascript-call-apply-bind-/blob/master/img/callVideo.gif?raw=true)



## apply()

**apply()** 메서드는 주어진 `this` 값과 배열 (또는 [유사 배열 객체](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Working_with_Array-like_objects)) 로 제공되는 `arguments` 로 함수를 호출합니다.



```javascript
function Product(name, price) {
    this.name = name;
    this.price = price;
  }

 function Food(name, price) {
    Product.apply(this, [name, price]);
    this.category = 'food';
  }
```



```javascript
var cheese = new Food('feta', 5);
console.log(cheese);
```

![](https://github.com/gyoungeunbae/Javascript-call-apply-bind-/blob/master/img/output.png?raw=true)



**apply()** 예제는  **call()** 에서의 **코드**와 거의 똑 같고, **결과값**도 같은 데요. 근본적인 차이점은  `call()` 은 함수에 전달될 **인수 리스트**를 받는데 비해, `apply()` 는 **인수들의❗단일❗️ 배열**을 받는다는 점입니다.

```javascript
Product.apply(this, [name, price]);
```



## bind()
**bind()** 메소드는 호출될 때 그 `this` 키워드를 제공된 값으로 설정하고 새로운 함수가 호출될 때 제공되는 주어진 순서의 선행 인수가 있는 **새로운 함수**를 생성합니다.  

 *bind()의 주요 목적은 함수와 객체를 서로 묶는 것이다*

프로그래밍언어론: **바인딩이란 ..?**

```javascript
function saySomething(something) { return "hi, " + this.name + ". " + something };

var person = { name: "kim" };
var g = saySomething.bind(person);
g("how are you?");
```

![](https://github.com/gyoungeunbae/Javascript-call-apply-bind-/blob/master/img/out3.png?raw=true)

 `person`객체에 `name` property가 있고, `saySomething.bind(person)`을 변수` g`에 할당하였습니다.

변수 g에는 아래와 같은 함수가 생겼다고 볼 수 있습니다.

```javascript
var person = { 
    name: "kim",
    saySomething: function(something) {
        return "hi, " + this.name + ". " + something;
    }
};
```







### Reference

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call>

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply>

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind>

<https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220487461542&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F>