# Javascript:  call(), apply(), bind()

자바스크립트에서 call, bind, apply 이해시키기

## call()

**call()** 메서드는 주어진 `this`값 및 각각 전달된 `arguments`와 함께 함수를 호출합니다.

```javascript
function Product(name, price) {
 	this.name = name;
 	this.price = price;
    if(price < 0) {
        throw RangeError('가격이 마이너스이기 때문에 물건을 생성할 수 없습니다.'+this.name);
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
  
    if (price < 0) {
      throw RangeError('Cannot create product ' +
                        this.name + ' with a negative price');
    }
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



**apply()**예제는  **call()** 에서의 **코드**와 거의 똑 같고, **결과값**도 같은 데요. 근본적인 차이점은  `call()` 은 함수에 전달될 **인수 리스트**를 받는데 비해, `apply()` 는 **인수들의❗단일❗️ 배열**을 받는다는 점입니다.

```javascript
Product.apply(this, [name, price]);
```



## bind()

**bind()** 메소드는 호출될 때 그 `this` 키워드를 제공된 값으로 설정하고 새로운 함수가 호출될 때 제공되는 주어진 순서의 선행 인수가 있는 새로운 함수를 생성합니다. 



```javascript
function saySomething(something) { return "hi, " + this.name + ". " + something };
 
console.log(saySomething("how are you?"));
```

위의 코드의 결과값은 어떻게 나올까요? 











이 3가지는 모두 context를 맞춰주는 함수로서 this가 무엇인지

newPrint() 함수는 blog 객체를 this에 바인딩시켜 print() 함수를 실행하는 새로운 함수다.

출처: 

https://boycoding.tistory.com/41

 [소년코딩]



call apply 메소드를 사용해서 this 값을 다른 context로 전달할 수 있다.



### Reference

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call>

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply>

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind>

<https://m.blog.naver.com/PostView.nhn?blogId=writer0713&logNo=220487461542&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F>