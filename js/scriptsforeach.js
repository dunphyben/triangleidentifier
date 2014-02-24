var scrabble = function(txt) {
  var lettersValueOne = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  var lettersValueTwo = ["D", "G"];
  var lettersValueThree = ["B", "C", "M", "P"];
  var lettersValueFour = ["F", "H", "V", "W", "Y"];
  var lettersValueFive = ["K"];
  var lettersValueEight = ["J", "X"];
  var lettersValueTen = ["Q", "Z"];
  var multipleLetters = txt.split("");
  var totalValue = 0; 


multipleLetters.forEach(function(letter) {
  if (lettersValueOne.indexOf(letter) > -1) {
      totalValue += 1;
    } else if (lettersValueTwo.indexOf(letter) > -1) {
      totalValue += 2;
    } else if (lettersValueThree.indexOf(letter) > -1) {
      totalValue += 3; 
    } else if (lettersValueFour.indexOf(letter) > -1) {
      totalValue += 4;
    } else if (lettersValueFive.indexOf(letter) > -1) {
      totalValue += 5;
    } else if (lettersValueEight.indexOf(letter) > -1) {
      totalValue += 8; 
    } else if (lettersValueTen.indexOf(letter) > -1) {
      totalValue += 10;
    };
 });
    return totalValue;
};






  

  // lettersValueOne.forEach(function(letter) {
  //   if (multipleLetters[i] === letter) {
  //     totalValue += 1;
  //   }
  // });
  
  // lettersValueTwo.forEach(function(letter) {
  //   if (multipleLetters[i] === letter) {
  //     totalValue += 2;
  //   }
  // });

  // lettersValueThree.forEach(function(letter) {
  //   if (multipleLetters[i] === letter) {
  //     totalValue += 3;
  //   }
  // });

  // lettersValueFour.forEach(function(letter) {
  //   if (multipleLetters[i] === letter) {
  //     totalValue += 4;
  //   }
  // });

  // lettersValueFive.forEach(function(letter) {
  //   if (multipleLetters[i] === letter) {
  //     totalValue += 5;
  //   }
  // });

  // lettersValueEight.forEach(function(letter) {
  //   if (multipleLetters[i] === letter) {
  //     totalValue += 8;
  //   }
  // });

  // lettersValueTen.forEach(function(letter) {
  //   if (multipleLetters[i] === letter) {
  //     totalValue += 10;
  //   }
  // });

