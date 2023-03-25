function feast(beast, dish) {
    var result1 = beast.split('');
    var result2 = dish.split('');
    const condicional1 = (result1[0] == result2[0])
    const condicional2 = (result1[result1.length - 1] == result2[result2.length - 1])
    if (condicional1 && condicional2 == true){
      return true;
    }
    else{
      return false
    }
  }