/*
You are given a string of numbers between 0-9. 
Find the average of these numbers and 
return it as a floored whole number 
(ie: no decimal places) written out as a string. 

Example:
  "zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/


// Solution

const numbers = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const averageString = (str) => {
  const nums = str.split(' ').map(v => numbers.indexOf(v));
  if (nums.includes(-1)) return 'n/a'
  const sum = nums.reduce((prev, cur) => prev + cur);
  const average = Math.floor(sum / nums.length)
  return numbers[average]
}

// or

function averageString(str) {
  let numObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  },
  sum = 0;
  str = str.split(' ');
  for(let i = 0; i < str.length; i++) {
    if(numObj[str[i]] === undefined) {
      return 'n/a';
    } else {
      sum += numObj[str[i]];
    }
  }
  return Object.keys(numObj)[Math.floor(sum/str.length)];
}