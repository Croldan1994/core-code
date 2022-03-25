
# Core-Code
Core Code bootcamp

# WEEK 1

<h1>Tuesday Assignments</h1>

1) Video has been watched

2) Java language is compiled or interpreted?

<p>R// Java is a mixture of compiled and interpreted language. The main reason for this is the source code has to be compiled into byte-code and then the JVM (Java Virtual Machin) will then interpret the code into machine code and it will have the ability to be used on any platform or operative system.</p>

3) Create an algorithm to calculate the equivalent of your local currency to USD

<p>R//
1. Browse the internet and use google or any other search engine on my mobile device or laptop 
2. Type "Currency converter" on the navigation bar
3. The search engine will display the options, so I will just select a website that converts currencies
4. Define the input currency to be in quetzales
5. Define the output currency to be in USD
6. Make the calculus and get the output in the USD currency</p>

4) Why is pseudocode helpful?
 
<p>R// It is helpful because it allows the programmer to understand what the issue is, it allows a programmer to describe the issue in a away it can be understood and then once the problem has been identified, it will be easier to know what functions, conditional statements and syntax to use to solve that problem and translate it into code. 

5) Create a pseudocode to calculate the aproximated age of a user base on the year they born, (you can define a variable with the actual year if you need it, like for example i could define Y <-- 2022)

<p>R//  

1. The user must enter the year of birth
2. The output will be the age of the user. 
3. Define a variable that allows the user to know his age based on his date of birth

     If the user enters his year of birth the output will be the the substraction of 2022 minus the year of birth</p>
     
     
6) Why are flowcharts important to us as developers?

<p>R//
Flowcharts are important because they will allow us to have a structure and a set of steps that our algorithm should take by making it easier to read and understanding when we want to create our code.</p>


------------------------------------------------------------------------------------------------------------------------------------------------------------------
<><h1>Wednesday Assignments</h1>

1. Learn about Decimal, Binary and hexadecimal numbers. 

<p>Binary numbers: Binary numbers are base "2" numbers. They are composed by 0 and 1. We start counting at 0, then 1, then you run out of digits ... so we start back at 0 again, but increase the number on the left by 1.</p>

<p>Decimal numbers: Decimal numbers are base 10 numbers. They start from 0 to 9 but don't include the number 10. After the number 9, we run out of digits. Every digit in a decimal number has a "position", and the decimal point helps us to know which position is which. The position just to the left of the point is the "Ones" position. If we see a "7" there we know it means 7 ones. Every position further to the left is 10 times bigger, and every position further to the right is 10 times smaller. But notice something interesting: there is no symbol for "ten". "10" is actually two symbols put together, a "1" and a "0".</p> 

<p>Hexadecimal numbers: Hexadecimal numbers have 16 numbers. They look the same as the decimal numbers up to 9, but then there are the letters ("A',"B","C","D","E","F") in place of the decimal numbers 10 to 15. So a single Hexadecimal digit can show 16 different values instead of the normal 10.</p> 

Example: 0 1 2 3 4 5 6 7 8 9 A B C D E F, 

Then we start at 0 again but we add 1 on the left. 

10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 1A, 1B, and so on until 1F. Then we start from 0 and add 1 to the left one more time 20, 21, and so on. 

2. Translate the year you where born to binary, decimal and hexadecimal

<p>The year I was born: 1994 

Decimal: 1994 

Binary:  1994 / 2 = 997 with 0 remainder
997 / 2 = 498 with 1 remainder
498 / 2 = 249 with 0 remainder
249 / 2 = 124 with 1 remainder
124 / 2 = 62 with 0 remainder
62 / 2 = 31 with 0 remainder
31 / 2 = 15 with 1 remainder
15 / 2 = 7 with 1 remainder
7 / 2 = 3 with 1 remainder
3 / 2 = 1 with 1 remainder
1 / 2 = 0 with 1 remainder

Then we put the remainders together in reverse order: 11111001010(2) and that would be the binary of 1994 which is my date of birth.</p>

<p>Hexadecimal:

1994 / 16 = 124 with remainder 10 (A)
124 / 16 = 7 with remainder 12 (C)
7 / 16 = 0 with remainder 7

So 1994(10) would be 7CA in hexadecimal. 

3. Translate 51966 into hexadecimal and binary

51966 to binary: 

51966/2 = 25983, remainder is 0
25983/2 = 12991, remainder is 1
12991/2 = 6495, remainder is 1
6495/2 = 3247, remainder is 1
3247/2 = 1623, remainder is 1
1623/2 = 811, remainder is 1
811/2 = 405, remainder is 1
405/2 = 202, remainder is 1
202/2 = 101, remainder is 0
101/2 = 50, remainder is 1
50/2 = 25, remainder is 0
25/2 = 12, remainder is 1
12/2 = 6, remainder is 0
6/2 = 3, remainder is 0
3/2 = 1, remainder is 1
1/2 = 0, remainder is 1</p>



51966 to hexadecimal: 

Hexadecimal numbers have a 16 base. So in order to convert from decimal to hexadecimal we must divide the number until the remainder is 0. 

This is how it's done. 

(51966/16 = 3247) Remainder: 14.  The position of 14 in the hexadecimal base is E
(3247/16 = 202)   Remainder: 15.  The position of 15 in the hexadecimal base is F
(202/16 = 12)     Remainder: 10   The position of 15 in the hexadecimal base is A
(12/16 = 0)       Remainder: 12   The position of 15 in the hexadecimal base is C

We would start from the bottom to the top to get the number in hexadecimal and the final result is <b>CAFE(16)</b>

5. Base on the examples and the guide of the low-level language: 
 
5.1 Create a program to add two numbers given by the user 

![image](https://user-images.githubusercontent.com/88641189/149583086-16db3262-fb2f-4bf4-8530-cb2c2169b868.png)

##Codigo

.data
	result_message: .asciiz "\nEl resultado es: "
.text
	main:
		li $t0, 30
		li $t1, 50

		add $t2, $t0, $t1

		li $v0, 4
		la $a0 result_message
		syscall

		li $v0, 1
		move $a0, $t2
		syscall


5.2 Create a program that display your name

![image](https://user-images.githubusercontent.com/88641189/149584337-1ba9b7ee-6c27-4ef3-932c-dab0737bf074.png)

#Codigo: 

.data
      message: .asciiz "\nMi Nombre es: Carlos"
      
.text
      main: 
      li $v0, 4
      la $a0, message
      syscall







--------------------------------------------------------------------------------------------------------------------------------------------------------

<h1>Week challenges  Thursday Assignments.</h1>

1. Search for real word applications of Javascript

<p>R//

- It is mainly used for making websites interactive by adding behavior to web pages. 
- It can also develop web servers and web applications as well. 
- It can also be used to create videogames. 
- It can also be used to develop software that programs flying robots</p>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

# WEEK 2 challenges 

<h1>Monday</h1>

1. Finished Git course. https://classroom.udacity.com/courses/ud123
2. Finished Data Types video: https://www.youtube.com/watch?v=A37-3lflh8I
3. Read the article about basic operations: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
4. Created my codewars profile: https://www.codewars.com/users/Croldan1994


<h1>Tuesday</h1>

1. Watched video on how to google as a software engineer: https://www.youtube.com/watch?v=cEBkvm0-rg0
2. [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)

Solution: 
``` javascript
function multiply(a, b){
  a * b
}
```

3. [ASCII Total](https://www.codewars.com/kata/572b6b2772a38bc1e700007a)
``` javascript
function uniTotal (string) {
// total up dem unicodes!
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count += string.charCodeAt (i);
  }
  return count;
}
``` 

4. [get character from ASCII Value](https://www.codewars.com/kata/55ad04714f0b468e8200001c)
``` javascript
function getChar(b){
  // ...
  return String.fromCharCode (b);
}
 ```
4.[Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript)
``` javascript
function addBinary( a, b ){
  //variable sum
  var sum = a + b, binary = ''; while ( sum > 0 ) 
{ binary = ( sum % 2 ) + binary; sum = Math.floor( sum / 2 ); }
 return binary; 
}
```
5. [Student's Final Grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript)

``` javascript
function finalGrade (exam, projects) {
  // final grade
  if (exam > 90 || projects > 10)
  {
   return 100; 
  }
else if (exam > 75 && projects >= 5)
{
  return 90;
  }
else if (exam > 50 && projects >= 2)
  {
    return 75;
  }
else 
{ return 0;
  }
}
```


<h2>Wednesday</h2>

1.[Holiday VIII - Duty Free](https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript)
``` javascript
function dutyFree(normPrice, discount, hol){
return Math.floor(hol/((normPrice*discount)/100));
}
```
2.[Twice as old](https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript)
``` javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let twiceAsOld = dadYearsOld - (sonYearsOld*2);
  return Math.abs(twiceAsOld);
}
```
3.[Valid Spacing](https://www.codewars.com/kata/5f77d62851f6bc0033616bd8)
``` javascript
function validSpacing(s) {
  // write your code here
return s=='' ? true : s.split(' ').find(el=> el=='') >=0? false : true
}
```
4. [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)
``` javascript
function fakeBin(x){
  return x.split('').map((num) => num > 4 ? 1 : 0).join('');
}
```
<h2>Thursday</h2>

1.[Exclamation marks series #2: Remove all exclamation marks from the end of sentence](https://www.codewars.com/kata/57faece99610ced690000165/train/javascript)
``` javascript
function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}
```
2. [Vowel remover](https://www.codewars.com/kata/5547929140907378f9000039)
``` javascript
//this is a function 
function shortcut (string) {
return string.replace(/[aeiou]/ig, '');
}
```
3. [Rock Paper Scissors!](https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript) 
``` javascript
const rps = (p1, p2) => {
  const pattern = ['rock', 'paper', 'scissors'];
  const p1Index = pattern.findIndex((v) => v === p1);
  const p2Index = pattern.findIndex((v) => v === p2);
  
  if ((p1Index + 1) % 3 === p2Index) {
    return 'Player 2 won!';
  }
  if ((p1Index + 2) % 3 === p2Index) {
    return 'Player 1 won!';
  }
  
  return 'Draw!';
};
```
4. [Persistent Bugger](https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript)
``` javascript
function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  var mult = 1;
  var splitStr = num.toString().split("");
  for (var i = 0; i < splitStr.length; i++) {
    mult *= parseFloat(splitStr[i])
  }
  return 1 + persistence(parseFloat(mult));
}

console.log(
  persistence(999),
  persistence(39),
  persistence(4)
);
```
<h1>Mission statement</h1>

<p>My name is Carlos and I'm a front end developer. I am self taught and I currently work with the following tech stack: HTML, CSS, Javascript, NodeJS for backend, React. I've been building modern websites for over a year now and I am so thrilled to work in the tech industry. Perseverance and discipline are able to get you anywhere you want, that's my main motto.</p>
 

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


---------------------------------------------------------------------------------------------------------------------------------------------
## WEEK 4


Week challenges (Monday) 💻
 
1. I watched this video on regular expressions from fireship
2. Watched and followed video from free code camp on regex.
3. I watched guide from dev.to on regular expressions 
4. I watched video on promises from fireship: https://www.youtube.com/watch?v=RvYYCGs45L4
5. I watched video on web dev simplified about promises: https://www.youtube.com/watch?v=DHvZLI7Db8E
6. I watched this video on async/await on javascript: https://www.youtube.com/watch?v=rKK1q7nFt7M

Week challenges (Tuesday) 💻

1. This link is nice to have and read: Read the typescript handbook https://www.typescriptlang.org/docs/handbook/intro.html
2. Typescript object type: https://typescript-exercises.github.io/#exercise=1  Finished the first typescript exercise. 
3. Read this 
4. Typescript union types
5. Typescript in operator
6. Find the odd int: solution
7. Stop gninnipS My sdroW!: Solution

``` javascript
function spinWords(sentence){
  const sentenceArray = sentence.split(' ');
  let result = '';
  sentenceArray.map((str, i) => {
    if (str.length >= 5){
      sentenceArray[i] = str.split('').reverse().join('');
    } else {
      sentenceArray[i] = str;
    }
  result = sentenceArray.join(' ');
  });
return result;
}
```

Week challenges (Wednesday) 💻
1. Array.diff: Solution 
``` javascript
function arrayDiff(a, b) {
    // Filter entire a array, only keep the value if b does not contain that value
    return a.filter(val => !b.includes(val));
}
``` 
2. Create Phone Number

``` javascript

  function createPhoneNumber(numbers) {
    let str = numbers.join('');
    return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
}
```

3.Watch this
4. Watch this
5. Read this
6. Read this
7. Read this

Week challenges (Thursday) 💻

1. Detect Pangram
``` javascript
function isPangram(string){
  //...
  let strArr = string.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
        return false;
    }
}
return true; 
}
```
2. Find the missing letter
``` javascript

function findMissingLetter(array) {
  return String.fromCharCode(array.find((c,i)=>array[i+1].charCodeAt()-c.charCodeAt()!==1).charCodeAt()+1)
}
``` 

3. Find the unique number
``` javascript

function findUniq(arr) {
  let newArr = []
  arr.sort()
  return (arr[0] !== arr[1]) ?  arr[0] : arr.pop()
}
```
4. Reverse or rotate?
``` javascript

function revrot(str, sz) {
   if(!sz||sz<0||sz>str.length)return '';
   var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
   return arr.map(function(v){
     if(v.toString().split('').reduce((s,v)=>s+v*1,0)%2===0){
       return v.split('').reverse().join('');
     }
     else return v.slice(1)+v[0];
   }).join('');
}
``` 

5. What's Your Poison?
``` javascript

function find(rats) {
  return rats.reduce((a,b)=>a+Math.pow(2,b),0)
}
```

6. ✨Complete your 3rd Core Challenge. This is one of the requirements for the certification, where you'll boost your dev professional-brand.

------------------------------------------------------------------------------------------------------------------------------------------------------
# WEEK 5 

Week challenges (Monday) 💻

1. I read about primitives types from Javascript applied on typescript: Strings, boolean, number and how to specify arrays, and the values within arrays, instead of using a typeof operator like we use in Javascript. 


2. ``` Typescript


export function squareSum(numbers: number[]): number {
    let sum = 0
    for(const num of numbers) {
        sum += num * num
    }
    return sum
}
```
3. ``` Typescript


export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
    let population = p0;
    let years = 0;

    while(population < p)
    {
      population = population + (population * (percent/100)) + aug; 
      years++;
    }
    return years;
    }
}
``` Typescript
3. 


# WEEK 9


# Week challenges (Monday) 💻

1. What is Node js on my own words. 

Node js is a runtime environment created on 2012. It's a tool mostly used for backend development that can run server-side code without having to use a completely different programming language. Node js is an open-source environment that runs NPM packages and there are over 1,000,000 open source packages that can be used for free. This means that anyone can contribute to the vast diversity of packages offered by NPM without having to create packages or code by ourselves, instead having pre-loaded packages that will allow programmers to not work from scratch. You can stall react and typescript with the NPM package. 

# Week challenges (Tuesday) 💻

1. What is Node js on my own words. 

Node js is a runtime environment created on 2012. It's a tool mostly used for backend development that can run server-side code without having to use a completely different programming language. Node js is an open-source environment that runs NPM packages and there are over 1,000,000 open source packages that can be used for free. This means that anyone can contribute to the vast diversity of packages offered by NPM without having to create packages or code by ourselves, instead having pre-loaded packages that will allow programmers to not work from scratch. You can stall react and typescript with the NPM package. 

2. Answer the question: What is the V8 Javascript Engine? (Use your own words)

The V8 Javascript engine is the one in charge or running google chrome. It's the engine that runs javascript on the browser, making javascript more efficient and allowing node js environment to thrive and make node js an efficient tool for server code.  V8 is constantly evolving making it more competitive and better day by day. 

3. Answer the question: What is NVM and Why is it useful for Node.JS developers?

<h2>What is NVM</h2>
NVM stands for node version manager and the purpose of NVM is to have multiple versions of Node js. Several versions of Node js wor in different ways, hence the need to have the NVM to swtich from version to version. 

<h2>Why is it useful for developers</h2>

To sum it up, NVM allows users to:

* Locally download any of the remote Long Term Support (LTS) versions of Node.js with a simple command.
* Easily switch between multiple versions of Node.js, right from the command line.
* Set up aliases to switch between different downloaded versions of Node.js with ease.

This allows developers to be more productive and know what version of Node js they need to work on. 

4. 

5. 

6. Differences between CommonJS modules vs ES modules

- Common JS modules are synchronous, meaning that there are limitations when writing code with common js modules because modules have got to be processed one by one. Whereas ES modules has an asynchronous nature which is better for performance, but might not work for smaller applications. Common JS works with require (), and module.export to export module exports. ES modules is more adapted for newer versions of Node js. Common JS is more suited for older versions of node js. 

7. Create your own Local Node.JS module. The module must contain a function that calculates
the sum of two numbers. Use the previously created function in another file in any way.

ES module for addition: 

import {add} from './util.mjs

console.log(add(5,5)) //10 

8. Watched this video about the Client-Server architecture

I understood the relationship between client-server and the process from the beginning to the end. The user (client) inputting data and the server getting the information from the request that is sent through AJAX or HTTPS, then sent to the data base which whatever programming language we use and approving that  



Week challenges (Wednesday) 💻




Week challenges (Tuesday) 💻
Week challenges (Tuesday) 💻




