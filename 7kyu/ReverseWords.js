function reverseWords(str) {
    var controle = str.split(' ');
    var filtragem = [];
    for (i=0;i<controle.length;i++){
      var palavras = controle[i].split('')
      filtragem.push(palavras.reverse());
    }
    return filtragem.map(a => a.join('')).join(' ');
  }