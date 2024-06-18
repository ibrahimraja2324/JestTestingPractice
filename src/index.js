import "./styles/main.css";

function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let newString = "";
  let words = [];
  words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letters = [];
    letters = words[i].split("");
    letters.reverse();
    words[i] = letters.join("");
  }
  words.reverse();
  newString = words.join(" ");
  return newString;
}

const Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(string, key) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const length = alphabet.length;

  const shiftNormalized = ((key % length) + length) % length;

  const copy = alphabet
    .slice(shiftNormalized)
    .concat(alphabet.slice(0, shiftNormalized));

  let letters = string.split("");
  let index = [];
  let newIndex = [];
  for (let i = 0; i < letters.length; i++) {
    index.push(alphabet.indexOf(letters[i]));
  }
  for (let i = 0; i < index.length; i++) {
    newIndex.push(copy[index[i]]);
  }
  return newIndex.join("");
}

function analyseArray(array) {
  let object = {};
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  object.average = result / array.length;
  object.length = array.length;
  object.max = Math.max(...array);
  object.min = Math.min(...array);
  return object;
}

export { capitalise, reverseString, Calculator, caesarCipher, analyseArray };
