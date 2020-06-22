const romanNumeralConverter = (num, romanNumeral) => {
  if (romanNumeral === undefined) {
    romanNumeral = "";
  }
  if (num > 3999 || isNaN(num)) {
    console.log("input is greater then 3999 or input is NaN");
    return;
  } 
  let numArry = num.toString().split("")
  // Termination Case = conditional called if something goes wrong (prevents an infinate loop)
  if (num === 0) {
    return romanNumeral;
  }

  if (numArray.length === 1) {
    // Roman Numerals for numbers <=9
    if (num <= 3) {
      num -= 1;
      romanNumeral += "I";
    } 
    else if (num === 4){
      num -= 4; 
      romanNumeral += "IV";
    }
    else if (num <= 8) {
      num -= 5;
      romanNumeral += "V";
    }  
    else if (num <= 9) {
      num -= 9;
      romanNumeral += "IX"
    }
     
  } else if (numArray.length === 2) {
    if (numArray[0] < 4) {
      num -=10; 
      romanNumeral += "X"
    }
  }
  console.log(numArry)
  return romanNumeralConverter(num, romanNumeral);
}

