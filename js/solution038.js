function digitize(n) {
    let a = n.toString()
    a = a.split('').reverse().map(Number)
    return a
   }