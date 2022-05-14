function digitize(n) {
   let arr = String(n).split("").map(Number).reverse()
   console.log(arr)
  }
digitize(3456)