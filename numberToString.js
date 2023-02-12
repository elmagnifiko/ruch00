const numbers =  [2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words =  ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit",
"neuf", "dix"];

const numberToString = (numbers) => {
    return numbers.map((numbers) => {
      return words[numbers - 1];
    });
  };
  console.log(numberToString(numbers));

  module.exports = numberToString(numbers);