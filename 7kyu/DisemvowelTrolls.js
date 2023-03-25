/*Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel*/

function disemvowel(str) {
    var vogais = ['a','e','i','o','u'];
    var filtro = str.split('');
    var result = [];
    
    for (i=0; i<filtro.length; i++){
      // Verificando se o caractere atual é uma vogal (ignorando maiúsculas e minúsculas)
      if (!vogais.includes(filtro[i].toLowerCase())){
        result.push(filtro[i]);
      }
    }
    return result.join('');
  }