function setAlarm(employed, vacation){
    if (employed === true && vacation === true){
        console.log(false)
    }else if (employed === false && vacation === true){
        console.log(false)
    }else if (employed === false && vacation === false){
        console.log(false)
    }else if (employed === true && vacation === false){
        console.log(true)
    }
  }