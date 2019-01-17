function Product(name, price) {
    this.name = name;
    this.price = price;
  
    if (price < 0) {
      throw RangeError('Cannot create product ' +
                        this.name + ' with a negative price');
    }
  }
  
  function Food(name, price) {
    console.log(q)
    var a = "c";
   // console.log(a);
    Product.call(Food, name, price);
    console.log(Product);
    //test.call(this);
    this.category = 'food';
    console.log(Food);

  }
  /*
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }*/
  function test(){
      var a = "b";
      console.log(this.a);
  }
  
  //var cheese = new Food('feta', 5);
 // var fun = new Toy('robot', 40);

  console.log(cheese);
  //console.log(fun);
  //console.log(Food("a", "b"));