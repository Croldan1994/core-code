# WEEK 3 


# Week challenges (Monday) 💻

1. [Who likes it](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
 ```javascript
   function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";  
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}
```
2. [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)
 ``` javascript
 var countBits = function(n) {
  // Program Me
  const binary = n.toString(2).replace(/0/g,'').length;
  return binary 
};

 ```
3. [Decode the Morse code](https://www.codewars.com/kata/54b724efac3d5402db00065e)
``` javascript
decodeMorse = function(morseCode){
  //your code here
  morseCode = morseCode.trim();
  let refinedData = morseCode.split('   ');
  let result = [];
  
  for (let i = 0; i < refinedData.length; i++) {
    let temp = refinedData[i].split(' ');
    for (let j = 0; j < temp.length; j++) {
      if (MORSE_CODE[temp[j]]) {
        result.push(MORSE_CODE[temp[j]]);
      }
    }
    
    if (i !== refinedData.length - 1) {
    result.push(' ');
    }
  }
  return result.join('');
}
```
# Week challenges (Tuesday) 💻

1.[Your order, please](https://www.codewars.com/kata/55c45be3b2079eccff00010f)
``` javascript
var reg = /\d/;
function order(words){
  return words.split(' ').sort(comparator).join(' ');
}
function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg)
}
```
2.[Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)
``` javascript
function duplicateCount(text){
  let result = 0,
      soltingObject = {};
  text.toLowerCase().split('').map(str => {
      if (!soltingObject.hasOwnProperty(str)) {
        soltingObject[str] = 0;
      } else {
        if (soltingObject[str] === 0) {
          result += 1;
        }
        soltingObject[str] = soltingObject[str] + 1;
      }
  });
  return result;
}
```
3.[Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)
``` javascript
function pigIt(str) {
  const arr = str.split(' ')
  return arr
    .map((word) => {
      return word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word
    })
    .join(' ')
}
```
# Week challenges (Wednesday) 💻

1.[Valid Parentheses](https://www.codewars.com/kata/52774a314c2333f0a7000688)
```javascript
function validParentheses(parens){
   var tokenizer = /[()]/g, 
       count = 0,           
       token;
   while(token = tokenizer.exec(parens), token !== null){
      if(token == "(") {
         count++;
      } else if(token == ")") {
         count--;
         if(count < 0) {
            return false;
         }
      }
   }
   return count == 0;
}
```
2.[Convert string to camel case](https://www.codewars.com/kata/517abf86da9663f1d2000003)
``` javascript
function toCamelCase(str){
  str = str.split('');
  return str.map(function(el, i){
    if(el == '-' || el == '_'){
      el = str[i+1].toUpperCase();
      str.splice(i+1, 1);
    }
    return el;
  }).join('');
}
```
3.[Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667)
``` javascript
var uniqueInOrder = function(iterable) {
    var arr = [];
    for (var i=0;i<iterable.length;i++) {

    // check if there is back to back letter
    if (iterable[i] !== iterable[i+1]) {

        // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
}
```
# Week challenges (Thursday) 💻

1.[Fold an array](https://www.codewars.com/kata/57ea70aa5500adfe8a000110)
``` javascript
function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
}
```

2.[Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449)
``` javascript
function encryptThis(text) {
  let strArr = text.split(' ');
  let output = [];
  
  strArr.forEach(str => {
    if (str.length === 1) {
      output.push(str.charCodeAt(0));
    } 
    else {
      let tempStr = str.split('');
      tempStr[0] = str.charCodeAt(0);
      tempStr[1] = str[str.length - 1];
      tempStr[str.length - 1] = str[1];
      output.push(tempStr.join(''));
    }
  });
  
  return output.join(' ');
}

console.log(encryptThis("hello world"));
```

3.[Format a string of names like 'Bart, Lisa & Maggie'. (retired)](https://www.codewars.com/kata/53368a47e38700bd8300030d)
``` javascript
function list(names){
 if (names.length > 1) {
   return `${otherNames(names)} & ${names[names.length - 1].name}`
 } else if (names.length === 1) {
   return names[0].name
 }
  return '';
}

function otherNames(array) {
  return array.splice(0, array.length - 1).map(person => person.name).join(', ');
}
```
4. ✨Complete your 2nd Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.(Done)
