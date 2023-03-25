function sumMix(x){
    var teste = x.map(a => parseFloat(a));
    var soma = 0;
    for(i=0;i<teste.length;i++){
      soma += teste[i]
    }
    return soma;
  }