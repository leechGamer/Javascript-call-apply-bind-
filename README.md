# Javascript:  call(), apply(), bind()

자바스크립트에서 call, bind, apply 이해시키기

## call()

call메소드는 주어진 this값 및 각각 전달된 인수와 함께 함수를 호출합니다.

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

![Screen Shot 2019-01-17 at 5.51.38 PM](/Users/ola/Desktop/Screen Shot 2019-01-17 at 5.51.38 PM.png)



