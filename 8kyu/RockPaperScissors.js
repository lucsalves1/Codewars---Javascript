const rps = (p1, p2) => {
    const s = "scissors"
    const r = 'rock'
    const p = 'paper'
    const p1w = ( (p1 == s && p2 == p) || (p1 == r && p2 == s) || (p1 == p && p2 == r) );
    if (p1 == p2){
      return ("Draw!")
    }
    else if (p1w == true){
      return ("Player 1 won!")
    }
    else {
      return ("Player 2 won!")
    }
  };