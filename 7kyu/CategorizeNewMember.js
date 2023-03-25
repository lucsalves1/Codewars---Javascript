function openOrSenior(data){
    var novoArray = [];
    // novoArray contendo a saída esperada
    for (i=0;i<data.length;i++){
      var teste1 = data[i][0];
      //variável recebendo o primeiro elemento dos arrays aninhados
      var teste2 = data[i][1];
      //variável recebendo o segundo elemento dos arrays aninhados
      if (teste1 >= 55 && teste2 > 7){
        novoArray.push("Senior")
      } else {
        novoArray.push("Open")
      }
      //condições de teste para as saídas esperadas
      }
    return novoArray;
  }
      