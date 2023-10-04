function toRomanLazy(num) {
  let output = [];
  const romanNumeralToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

  for(let i = 0; i < romanNumeralPriorityOrder.length; i++){
    while(num / Math.floor(romanNumeralToArabic[romanNumeralPriorityOrder[i]]) >= 1){
      output.push(romanNumeralPriorityOrder[i])
      num -= romanNumeralToArabic[romanNumeralPriorityOrder[i]]; 
    }
  }
 
  return output.join("");
}

function toRoman(num) {
  let output = [];
  const romanNumeralToArabic = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  }

  const romanNumeralPriorityOrder = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for(let i = 0; i < romanNumeralPriorityOrder.length; i++){
    while(num / Math.floor(romanNumeralToArabic[romanNumeralPriorityOrder[i]]) >= 1){
      output.push(romanNumeralPriorityOrder[i])
      num -= romanNumeralToArabic[romanNumeralPriorityOrder[i]]; 
    }
  }  
  return output.join("");
}

module.exports = { toRoman, toRomanLazy };
