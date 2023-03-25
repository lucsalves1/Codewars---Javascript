function squareDigits(num) {
    const digitos = num.toString().split('');
    const conversor = digitos.map(a => a * a); 
    const result = conversor.join('');
    return parseInt(result); 
  }