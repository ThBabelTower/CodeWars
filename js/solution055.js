function reverseList(list) {
    let fin = []
    for (let i = 0; i < list.length; i++) {
      fin.push(list[list.length-i-1])
    }
    return fin
  }