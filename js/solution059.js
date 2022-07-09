const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    let a = mpg * fuelLeft
    if (a >= distanceToPump){
      return true
    }else return false
  };