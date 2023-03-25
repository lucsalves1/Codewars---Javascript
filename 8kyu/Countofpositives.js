function countPositivesSumNegatives(input) {
    var somaPositivos = 0;
    var somaNegativos = 0;
      if (input == null || input.length == 0){
     return [];
      }
      else if (input.length > 0){
        for (i=0;i<input.length;i++){
          if (input[i] > 0 ){
          somaPositivos += 1;
        }
        else if (input[i] < 0){
          somaNegativos += input[i];
        }
      }
      return ([somaPositivos,somaNegativos]);
    }
  }