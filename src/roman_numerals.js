const romanNumeralConverter = (num, romanNumeral) => {
  if (romanNumeral === undefined) {
    romanNumeral = "";
  }
  if (num > 3999 || isNaN(num)) {
    console.log("input is greater then 3999 or input is NaN");
    return;
  } 
  
  // Termination Case = conditional called if something goes wrong (prevents an infinate loop)
  if (num === 0) {
    return romanNumeral;
  }
  let numArry = Array.from(String(num), Number)

  // Roman Numerals for numbers <=9
  if (numArry.length === 1) {
   
    if (num <= 3) {
      num -= 1;
      romanNumeral += "I";
    } 
    else if (num === 4) {
      num -= 4; 
      romanNumeral += "IV";
    }
    else if (num <= 8) {
      num -= 5;
      romanNumeral += "V";
    }  
    else if (num <= 9) {
      num -= 9;
      romanNumeral += "IX";
    }
    // Roman Numerals >= 10 && <= 99
  } else if (numArry.length === 2) {
    if (numArry[0] <= 3) {
      console.log("numArry[0] <= 3")
      num -= 10; 
      romanNumeral += "X";
    }
    else if (numArry[0] === 4){
      num -= 40;
      romanNumeral += "XL";
      // console.log(`num is ........${num}`)
      // return;
    }
    else if(numArry[0] <= 8){
      console.log("numArry[0] <= 8")
      num -= 50;
      romanNumeral += "L";
    }
    else if (numArry[0] <= 9){
      console.log("numArry[0] <= 9")
      num -= 90;
      romanNumeral += "XC"
    }
    // Roman Numerals >=100 && <= 500
  } else if (numArry.length === 3) {
    if (numArry[0] <= 3) {
      num -= 100;
      romanNumeral += "C";
    }
    else if (numArry[0] === 4) {
      num -= 400; 
      romanNumeral += "CD";
    }
    else if (numArry[0] <= 8) {
      num -= 500;
      romanNumeral += "D";
    }
    else if (numArry[0] <= 9) {
      num -= 900;
      romanNumeral += "CM"
    }
  } else if (numArry.length === 4) {
    if (numArry[0] <= 3) {
      num -= 1000; 
      romanNumeral += "M";
    }
  }
  console.log(numArry)
  return romanNumeralConverter(num, romanNumeral);
}

