function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    let a = birds.filter((x) => !geese.includes(x))
    return a
  };