function DNAStrand(dna) {
    function trocaLetra(a) {
      let newStr = '';
      for (let i = 0; i < a.length; i++) {
        if (a[i] == "T") {
          newStr += "A";
        } else if (a[i] == "A") {
          newStr += "T";
        } else if (a[i] == "C") {
          newStr += "G";
        } else if (a[i] == "G") {
          newStr += "C";
        }
      }
      return newStr;
    }
    return trocaLetra(dna);
  }