function abbrevName(name){
    let a = name.split(' ')
    a = a.map(i => i[0].toUpperCase()).join('.')
    return a
   }