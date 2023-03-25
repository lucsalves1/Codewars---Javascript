function betterThanAverage(classPoints, yourPoints) {
    var soma = classPoints.reduce((a,b) => a + b)
    if ((soma / classPoints.length) > yourPoints){
      return false;
    }
    else{
      return true;
    }
  }