function bmi(weight, height) {
    const bmiCalc = (weight / (height * height));
    if (bmiCalc <= 18.5){
      return ("Underweight")
    } else if (bmiCalc > 18.5 && bmiCalc<= 25){
      return ("Normal")
    } else if (bmiCalc > 25 && bmiCalc <= 30){
      return ("Overweight")
    } else {
      return "Obese"
    }
  }