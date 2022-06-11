function billboard(name, price = 30){
    var a = name.length;
    var cost = 0;
    for (var i = 0; i < a; i++) {
      cost += price;
    }
    return cost;
  } 