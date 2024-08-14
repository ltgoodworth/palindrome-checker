const result = document.getElementById("result");
const submit = document.getElementById("check-btn");
let textField = document.getElementById("text-input");

function removePunctuation(str) {
    return [...str].filter(char => /[^\W_]/.test(char)).join('');
}

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function getAnswer() {  
  let originalText = textField.value;
  let textInput = removePunctuation(originalText.toLowerCase());
  let reverseText = reverseString(textInput);
    if (originalText == "") {
      alert("Please input a value");
      return;
    } else if (textInput === reverseText) {
    return result.innerText = `${originalText} is a palindrome.`;
  } else if (textInput !== reverseText) {
    return result.innerText = `${originalText} is not a palindrome.`;
  }
}

submit.addEventListener("click", getAnswer);