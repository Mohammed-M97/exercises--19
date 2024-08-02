// Cat years, Dog years
var humanYearsCatYearsDogYears = function (humanYears) {
  let cat = 15;
  let dog = 15;
  for (let i = 1; i <= humanYears; i++) {
    if (i == 2) {
      cat += 9;
      dog += 9;
    } else if (i > 2) {
      cat += 4;
      dog += 5;
    }
  }
  return [humanYears, cat, dog];
};

console.log(humanYearsCatYearsDogYears(10));
