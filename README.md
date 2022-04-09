
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


2. [Square (n) sum](https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript)

``` Typescript

export function squareSum(numbers: number[]): number {
    let sum = 0
    for(const num of numbers) {
        sum += num * num
    }
    return sum
}
```
3. [Growth of a population] (https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript)

``` Typescript


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
``` 

4. [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript)

``` Typescript 

export function accum(s: string): string {
  return s.split('')
  .map((elem, index) => elem.toUpperCase() + (elem.toLowerCase()).repeat(index))
  .join('-');
}
```

5. [A wolf in sheep's clothing](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript) 

``` Typescript

export function warnTheSheep(queue: string[]): string {
  const position = queue.reverse().indexOf('wolf');
  return position ? `Oi! Sheep number ${position}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep';
}
``` 

# Week challenges (Tuesday) 💻

1. [A Rule of Divisibility by 13](https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/typescript)
``` Typescript

export function thirt(n: number): number {
  // your code
  let remainders: number[] = [1, 10, 9, 12, 3, 4];
  let result = n.toString().split('').reverse().map( (c,i) => parseInt(c)*remainders[i%6]).reduce( (p,c) => p += c);
  return n == result ? result : thirt(result)
}
``` 

2. [Playing with digits](https://www.codewars.com/kata/5552101f47fc5178b1000050)
``` Typescript
export class G964 {

    public static digPow = (n, p) => {
        var x = n.toString().split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
        return x % n ? -1 : x / n;
    }
}
``` 
3.[Valid braces](https://www.codewars.com/kata/5552101f47fc5178b1000050/train/typescript) 
``` Typescript
export class G964 {

    public static digPow = (n: number, p: number): number => {
        const sum = `${n}`.split('')
          .map(char => parseInt(char))
          .reduce((sum, int, index) => sum + Math.pow(int, p + index), 0);
        const result = sum / n;
        
        return Number.isInteger(result) ? result : -1;
    }
}
```
4. [Tic Tac Toe](https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc/train/javascript)
``` javascript

function solveTTT(b) {
  var xwin=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
  for (var i in xwin) if (xwin[i].map(x=>b[x]).join("")=="XX") return xwin[i].reduce((x,y)=>b[y]=="" ? x+y : x,0);
  for (var i in b) if (b[i]=="") return +i;
}
```

5. [Tic Tac Toe Table Generator](https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/javascript)
``` javascript

function displayBoard(board, width){
  var arr=[];
  var k=0
  for (var i=0; i<2*board.length/width-1; i++)
  {
    if (i%2==0)
    {
      var s=[];
      while (s.length<width)
        s.push(" "+board[k++]+" ");
      arr.push(s.join("|"));
    }
    else
    {
      var s="---";
      for (var r=1; r<width; ++r)
        s+="----"
      arr.push(s)
    }
  }
  return arr.join("\n");
}
```

# Week challenges (Wednesday) 💻
1. [Duplicate encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript) 

``` Typescript
export function duplicateEncode(word: string){
    // ...
    return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}
```           
2. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript)

``` Typescript

export const findOdd = (xs: number[]): number => {
  // happy coding!
  return xs.reduce( (a,b)=> a^b);
};
```

3.[Which are in?](https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript)
``` Typescript

 export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    return a1.filter(a => a2.some(b => b.includes(a))).sort();
  }
}
```
4. [Sums of Parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript)
``` Typescript

export function partsSums(ls: number[]): number[] {
  let total = ls.reduce((acc, cur) => acc + cur, 0)
  return [ ...[total], ...ls.map(num => total -= num) ]
}
```
5. [Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)

``` Typescript
export function longestConsec(strarr: string[], k: number): string {
  if(strarr.length === 0 || k > strarr.length || k <= 0) return "";
  
  return strarr.map((currentValue, index, array) => array.slice(index, index + k).join(''))
    .reduce((acc, cur) => cur.length > acc.length ? cur : acc)
}
```
# Week challenges (Thursday) 💻

1. Tile using typescript

``` Typescript
export class Tile {
  letter: string;
  value: number;

  constructor(letter: string, value: number) {
    this.letter = letter;
    this.value = value;
  }

  printTile() {
    console.log(`
        ===========================
          Letter: ${this.letter}
          Value: ${this.value}
        ===========================
    `);
  }
}
```

2. Time 
``` Typescript

export class Time {
  hour: number;
  minute: number;
  second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  printTime() {
    console.log(`
        ===========================
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ===========================
    `);
  }

  getInSeconds(): number {
    const minutes = this.hour * 60 + this.minute;
    return minutes * 60 + this.second;
  }
}
```

3. Rational 
``` Typescript

export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  printRational() {
    console.log(`${this.numerator} / ${this.denominator}`);
  }

  invert() {
    [this.numerator, this.denominator] = [this.denominator, this.numerator];
  }

  toFloat(): number {
    return this.numerator / this.denominator;
  }

  gcd(n: number, d: number): number {
    if (d == 0) return n;
    return this.gcd(d, n % d);
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
  }
}

```
4. 

# WEEK 6 
1. Read documentation about typescript. 

2. Menu using typescript

``` typescript
1. Input
import { prompt } from 'enquirer';
export type UserInput = { data: string };
export type UserFormInput = { data: any };
export type UserOption = { data: number };
export type UserOptionById = UserInput;
export type UserConfirm = { data: boolean };
export type Choice = { name: string; message: string };
export type SelectChoice = { option: number; message: string };
type Choices = Choice[] | string[];
type UserOptionAux = { data: string };
type SelectChoices = SelectChoice[];

export class Input {
  static async getInput(message: string): Promise<UserInput> {
    const input: UserInput = await prompt({
      type: 'input',
      name: 'data',
      message: message,
    });
    return input;
  }

  static async getForm(
    message: string,
    choices: Choices
  ): Promise<UserFormInput> {
    const input: UserFormInput = await prompt({
      type: 'form',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getSelect(
    message: string,
    choices: SelectChoices
  ): Promise<UserOption> {
    const input: UserOptionAux = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices.map((choice: SelectChoice) => ({
        name: choice.option.toString(),
        message: choice.message,
      })),
    });
    return { data: Number(input.data) };
  }

  static async getSelectById(
    message: string,
    choices: Choice[]
  ): Promise<UserOptionById> {
    const input: UserOptionById = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getConfirm(message: string): Promise<UserConfirm> {
    const input: UserConfirm = await prompt({
      type: 'confirm',
      name: 'data',
      initial: false,
      message: message,
    });
    return { data: input.data };
  }
}
import { prompt } from 'enquirer';
export type UserInput = { data: string };
export type UserFormInput = { data: any };
export type UserOption = { data: number };
export type UserOptionById = UserInput;
export type UserConfirm = { data: boolean };
export type Choice = { name: string; message: string };
export type SelectChoice = { option: number; message: string };
type Choices = Choice[] | string[];
type UserOptionAux = { data: string };
type SelectChoices = SelectChoice[];

export class Input {
  static async getInput(message: string): Promise<UserInput> {
    const input: UserInput = await prompt({
      type: 'input',
      name: 'data',
      message: message,
    });
    return input;
  }

  static async getForm(
    message: string,
    choices: Choices
  ): Promise<UserFormInput> {
    const input: UserFormInput = await prompt({
      type: 'form',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getSelect(
    message: string,
    choices: SelectChoices
  ): Promise<UserOption> {
    const input: UserOptionAux = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices.map((choice: SelectChoice) => ({
        name: choice.option.toString(),
        message: choice.message,
      })),
    });
    return { data: Number(input.data) };
  }

  static async getSelectById(
    message: string,
    choices: Choice[]
  ): Promise<UserOptionById> {
    const input: UserOptionById = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getConfirm(message: string): Promise<UserConfirm> {
    const input: UserConfirm = await prompt({
      type: 'confirm',
      name: 'data',
      initial: false,
      message: message,
    });
    return { data: input.data };
  }
}
```

2. Main

``` Typescript
import { Menu } from './Menu';
export class Main {
  async start() {
    const menu = new Menu();
    await menu.showMainMenu();
  }
}
```
3. Menu
``` Typescript
import { MenuElement } from './MenuElement';
import { Input, Choice, UserOption, SelectChoice } from './Input';
export class Menu {
  mainMenu: SelectChoice[] = [];

  soupMenu: Choice[] = [];
  chefSpecialsMenu: Choice[] = [];
  chickenMenu: Choice[] = [];
  beefMenu: Choice[] = [];
  beveragesMenu: Choice[] = [];

  soupOptions: MenuElement[] = [];
  chefSpecialsOptions: MenuElement[] = [];
  chickenOptions: MenuElement[] = [];
  beefOptions: MenuElement[] = [];
  beveragesOptions: MenuElement[] = [];

  constructor() {
    this.fillMainMenu();
    this.fillOptions();
    this.fillSubMenus();
  }

  fillMainMenu() {
    this.mainMenu = [
      { option: 1, message: 'Soup' },
      { option: 2, message: `Chef's Specials` },
      { option: 3, message: 'Chicken' },
      { option: 4, message: 'Beef' },
      { option: 5, message: 'Beverages' },
      { option: 6, message: 'Exit' },
    ];
  }

  fillOptions() {
    this.soupOptions = [
      new MenuElement('Wonton Soup (Chicken)', 2.25, '🍲'),
      new MenuElement('Chicken Corn Soup', 1.95, '🌽'),
      new MenuElement('Vegetable Corn Soup', 2.25, '🥕'),
    ];

    this.chefSpecialsOptions = [
      new MenuElement('Orange Beef', 8.95, '🍊'),
      new MenuElement('Kung Pao Shrimp', 8.5, '🦐'),
    ];

    this.chickenOptions = [
      new MenuElement('Lemon Chicken', 9.95, '🍋'),
      new MenuElement('Sesame Chicken', 9.95, '🐔'),
      new MenuElement('Hunan Chicken', 10.5, '🐣'),
    ];

    this.beefOptions = [
      new MenuElement('Pepper Steak', 9.95, '🫑'),
      new MenuElement('Manchurian Beef', 11.95, '🐄'),
    ];

    this.beveragesOptions = [
      new MenuElement('Piña Colada', 3.0, '🍍'),
      new MenuElement('Spanish Coffee', 5.5, '☕'),
    ];
  }

  fillSubMenus() {
    this.soupMenu = this.soupOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));

    this.chefSpecialsMenu = this.chefSpecialsOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));

    this.chickenMenu = this.chickenOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));

    this.beefMenu = this.beefOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));

    this.beveragesMenu = this.beveragesOptions.map((e: MenuElement) => ({
      name: e.id,
      message: e.printOption(),
    }));
  }

  async showMainMenu() {
    let option = -1;
    let input: UserOption;
    while (option !== 6) {
      input = await Input.getSelect('Select a menu option', this.mainMenu);
      option = input.data;
      switch (option) {
        case 1:
          await this.showSubMenuOption(
            'Select your Soup',
            this.soupMenu,
            this.soupOptions
          );
          break;
        case 2:
          await this.showSubMenuOption(
            `Select your Chef's Specials`,
            this.chefSpecialsMenu,
            this.chefSpecialsOptions
          );
          break;
        case 3:
          await this.showSubMenuOption(
            'Select your Chicken',
            this.chickenMenu,
            this.chickenOptions
          );
          break;
        case 4:
          await this.showSubMenuOption(
            'Select your Beef',
            this.beefMenu,
            this.beefOptions
          );
          break;
        case 5:
          await this.showSubMenuOption(
            'Select your Beverages',
            this.beveragesMenu,
            this.beveragesOptions
          );
          break;
        case 6:
          console.log(`\n
          *******************************************************
          ===========================================
                Enjoy your meal! 🙋🏻‍♂️
          ===========================================
          *******************************************************\n`);
          break;
      }
    }
  }

  async showSubMenuOption(
    message: string,
    subMenu: Choice[],
    subMenuOptions: MenuElement[]
  ) {
    const input = await Input.getSelectById(message, subMenu);
    const option = subMenuOptions.find((e: MenuElement) => input.data === e.id);
    console.log(`\n
    ===============================================================
        Here is your: ${option?.emoji} at a $${option?.price} cost
    ===============================================================\n`);
  }
}
```
4. MenuElement.ts

``` typescript 
import { v4 as uuidv4 } from 'uuid';

export class MenuElement {
  id: string;
  name: string;
  price: number;
  emoji: string;

  constructor(name: string, price: number, emoji: string) {
    this.name = name;
    this.price = price;
    this.emoji = emoji;
    this.id = uuidv4();
  }

  printOption() {
    return `${this.name}....$${this.price}`;
  }
}
```
5. app.ts

``` Typescript
import { Main } from './Main';

const program = new Main();
program.start();

```

# Movies
1. Action movie.ts
``` Typescript
import { Movie } from './Movie';

export class ActionMovie extends Movie {
  explosions_count: number;
  guns: boolean;
  martial_arts: boolean;

  constructor(
    name: string,
    director: string,
    language: string,
    running_time: number,
    year: number,
    explosions_count: number,
    guns: boolean,
    martial_arts: boolean
  ) {
    super(name, director, language, running_time, year);
    this.explosions_count = explosions_count;
    this.guns = guns;
    this.martial_arts = martial_arts;
  }

  incrementExplosions() {
    this.explosions_count += 1;
  }

  expectGuns(): string {
    if (this.guns) return '🔫';
    return '🙅🏻‍♂️';
  }

  expectMartialArts(): string {
    if (this.martial_arts) return '🥷🏻';
    return '🙅🏻‍♂️';
  }

  printActionMovie() {
    console.log(`
      ----------------------------
      Name: ${this.name}
      Year: ${this.year}
      Director: ${this.director}
      Language: ${this.language}
      Running Time: ${this.running_time}
      Jump Scares Count: ${this.explosions_count}
      Guns: ${this.expectGuns()}
      Martial Arts: ${this.expectMartialArts()}
      ----------------------------
    `);
  }
}

```
2. Horrormovies.ts

``` Typescript
import { Movie } from './Movie';

export class HorrorMovie extends Movie {
  jump_scares_count: number;
  ghosts: boolean;
  visions: boolean;

  constructor(
    name: string,
    director: string,
    language: string,
    running_time: number,
    year: number,
    jump_scares_count: number,
    ghost: boolean,
    visions: boolean
  ) {
    super(name, director, language, running_time, year);
    this.jump_scares_count = jump_scares_count;
    this.ghosts = ghost;
    this.visions = visions;
  }

  incrementJumpscares() {
    this.jump_scares_count += 1;
  }

  expectGhosts(): string {
    if (this.ghosts) return '👻';
    return '🙅🏻‍♂️';
  }

  expectVisions(): string {
    if (this.visions) return '🔮';
    return '🙅🏻‍♂️';
  }

  printHorrorMovie() {
    console.log(`
      ----------------------------
      Name: ${this.name}
      Year: ${this.year}
      Director: ${this.director}
      Language: ${this.language}
      Running Time: ${this.running_time}
      Jump Scares Count: ${this.jump_scares_count}
      Ghosts: ${this.expectGhosts()}
      Visions: ${this.expectVisions()}
      ----------------------------
    `);
  }
}

```
3. Input.ts 

``` Typescript 
import { prompt } from 'enquirer';
export type UserInput = { data: string };
export type UserFormInput = { data: any };
export type UserOption = { data: number };
export type UserOptionById = UserInput;
export type UserConfirm = { data: boolean };
export type Choice = { name: string; message: string };
export type SelectChoice = { option: number; message: string };
type Choices = Choice[] | string[];
type UserOptionAux = { data: string };
type SelectChoices = SelectChoice[];

export class Input {
  static async getInput(message: string): Promise<UserInput> {
    const input: UserInput = await prompt({
      type: 'input',
      name: 'data',
      message: message,
    });
    return input;
  }

  static async getForm(
    message: string,
    choices: Choices
  ): Promise<UserFormInput> {
    const input: UserFormInput = await prompt({
      type: 'form',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getSelect(
    message: string,
    choices: SelectChoices
  ): Promise<UserOption> {
    const input: UserOptionAux = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices.map((choice: SelectChoice) => ({
        name: choice.option.toString(),
        message: choice.message,
      })),
    });
    return { data: Number(input.data) };
  }

  static async getSelectById(
    message: string,
    choices: Choice[]
  ): Promise<UserOptionById> {
    const input: UserOptionById = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }
  static async getConfirm(message: string): Promise<UserConfirm> {
    const input: UserConfirm = await prompt({
      type: 'confirm',
      name: 'data',
      initial: false,
      message: message,
    });
    return { data: input.data };
  }
}
```
4. Main.ts 

``` Typescript 
import { Input, Choice, SelectChoice } from './Input';
import { Movie } from './Movie';
import { ActionMovie } from './ActionMovie';
import { HorrorMovie } from './HorrorMovie';

type ActionMovieInput = {
  name: string;
  director: string;
  language: string;
  running_time: string;
  year: string;
  explosions_count: string;
};

type HorrorMovieInput = {
  name: string;
  director: string;
  language: string;
  running_time: string;
  year: string;
  jump_scares_count: string;
};

export class Main {
  movies: Movie[] = [];
  menuOptions: SelectChoice[] = [
    { option: 1, message: 'Add Action Movie' },
    { option: 2, message: 'Add Horror Movie' },
    { option: 3, message: 'Show Action Movies' },
    { option: 4, message: 'Show Horror Movies' },
    { option: 5, message: 'Increment Explosions In Movie' },
    { option: 6, message: 'Increment Jump Scares In Movie' },
    { option: 7, message: 'Exit' },
  ];
  actionMovieForm: Choice[] = [
    { name: 'name', message: 'Name' },
    { name: 'director', message: 'Director' },
    { name: 'language', message: 'Language' },
    { name: 'running_time', message: 'Running Time (min)' },
    { name: 'year', message: 'Year' },
    { name: 'explosions_count', message: 'Explosions Count' },
  ];
  horrorMovieForm: Choice[] = [
    { name: 'name', message: 'Name' },
    { name: 'director', message: 'Director' },
    { name: 'language', message: 'Language' },
    { name: 'running_time', message: 'Running Time (min)' },
    { name: 'year', message: 'Year' },
    { name: 'jump_scares_count', message: 'Jump Scares Count' },
  ];

  async addActionMovie() {
    const info: ActionMovieInput = (
      await Input.getForm('Fill the following: ', this.actionMovieForm)
    ).data;
    const guns: boolean = (
      await Input.getConfirm('Are there guns in this movie?')
    ).data;
    const martial_arts: boolean = (
      await Input.getConfirm('Are there martial arts in this movie?')
    ).data;
    this.movies.push(
      new ActionMovie(
        info.name,
        info.director,
        info.language,
        Number(info.running_time),
        Number(info.year),
        Number(info.explosions_count),
        guns,
        martial_arts
      )
    );
  }

  async addHorrorMovie() {
    const info: HorrorMovieInput = (
      await Input.getForm('Fill the following: ', this.horrorMovieForm)
    ).data;
    const ghosts: boolean = (
      await Input.getConfirm('Are there ghosts in this movie?')
    ).data;
    const visions: boolean = (
      await Input.getConfirm('Are there visions in this movie?')
    ).data;
    this.movies.push(
      new HorrorMovie(
        info.name,
        info.director,
        info.language,
        Number(info.running_time),
        Number(info.year),
        Number(info.jump_scares_count),
        ghosts,
        visions
      )
    );
  }

  showActionMovies() {
    this.movies.forEach((movie: Movie) => {
      if (movie instanceof ActionMovie) movie.printActionMovie();
    });
  }

  showHorrorMovies() {
    this.movies.forEach((movie: Movie) => {
      if (movie instanceof HorrorMovie) movie.printHorrorMovie();
    });
  }

  async incrementJumpScares() {
    const horrorMoviesOptions: Choice[] = this.movies
      .filter((movie: Movie) => movie instanceof HorrorMovie)
      .map((movie: Movie) => ({
        name: movie.id,
        message: movie.name,
      }));
    if (horrorMoviesOptions.length === 0) {
      return console.log('No Horror Movies Available');
    }
    const idOfMovieToIncrementJumpScares = (
      await Input.getSelectById('Select The Horror Movie', horrorMoviesOptions)
    ).data;
    this.movies.forEach((movie: Movie) => {
      if (movie.id === idOfMovieToIncrementJumpScares) {
        if (movie instanceof HorrorMovie) return movie.incrementJumpscares();
      }
    });
    console.log('😨😱💀 Jump Scare has been added!');
  }

  async incrementExplosions() {
    const actionMoviesOptions: Choice[] = this.movies
      .filter((movie: Movie) => movie instanceof ActionMovie)
      .map((movie: Movie) => ({
        name: movie.id,
        message: movie.name,
      }));
    if (actionMoviesOptions.length === 0) {
      return console.log('No Action Movies Available');
    }
    const idOfMovieToIncrementExplosions = (
      await Input.getSelectById('Select The Action Movie', actionMoviesOptions)
    ).data;
    this.movies.forEach((movie: Movie) => {
      if (movie.id === idOfMovieToIncrementExplosions) {
        if (movie instanceof ActionMovie) return movie.incrementExplosions();
      }
    });
    console.log('💥💣🧨 Explosion has been added!');
  }

  async start() {
    let running = true;
    let option: number;
    while (running) {
      option = (await Input.getSelect('Blockbuster', this.menuOptions)).data;
      console.clear();
      switch (option) {
        case 1: {
          await this.addActionMovie();
          break;
        }
        case 2: {
          await this.addHorrorMovie();
          break;
        }
        case 3: {
          this.showActionMovies();
          break;
        }
        case 4: {
          this.showHorrorMovies();
          break;
        }
        case 5: {
          await this.incrementExplosions();
          break;
        }
        case 6: {
          await this.incrementJumpScares();
          break;
        }
        case 7: {
          running = false;
          break;
        }
        default: {
          console.log('No valid option selected');
        }
      }
    }
  }
}
```
5. 

import { v4 as uuidv4 } from 'uuid';

export class Movie {
  id: string = '';
  name: string;
  director: string;
  language: string;
  running_time: number;
  year: number;

  constructor(
    name: string,
    director: string,
    language: string,
    running_time: number,
    year: number
  ) {
    this.name = name;
    this.director = director;
    this.language = language;
    this.running_time = running_time;
    this.year = year;
    this.id = uuidv4();
  }
}

5. Movie.ts 

``` Typescript

import { v4 as uuidv4 } from 'uuid';

export class Movie {
  id: string = '';
  name: string;
  director: string;
  language: string;
  running_time: number;
  year: number;

  constructor(
    name: string,
    director: string,
    language: string,
    running_time: number,
    year: number
  ) {
    this.name = name;
    this.director = director;
    this.language = language;
    this.running_time = running_time;
    this.year = year;
    this.id = uuidv4();
  }
}
```
6. App.ts 

``` Typescript 

import { Main } from './Main';

const program = new Main();
program.start();

``` 
# README 

OOP Glossary: 

<h2><b>Abstraction</b></h2> In OOPS, Abstraction exposes necessary functionality to external objects and hides implementation details. This helps programmers use complex logic inside an object without understanding its implementation. In other words, it is the process of hiding the internal details of an application from the outer world so that we only need to know what the code does, but not how it does it.

![image](https://user-images.githubusercontent.com/88641189/161450583-9631e3df-ae59-4033-8de0-99b4021f4f00.png)

 
<h2><b>Inheritance</b></h2>  As with the other principles of OOP, inheritance is meant to optimize the work of programmers. The role that inheritance plays in this optimization is in allowing software engineers to create class hierarchies, where classes and objects inherit properties and behaviors from their parent (or super) class. A class that inherits from a parent (or super) class is called a subclass or child class, and objects that receive properties and behaviors from a parent through inheritance are referred to as child objects.

  <h2><b>Polymorphism</b></h2> Polymorphism is one of the core concepts of object-oriented programming (OOP) and describes situations in which something occurs in several different forms. In computer science, it describes the concept that you can access objects of different types through the same interface. 
  
  <h2><b>Encapsulation</b></h2> By definition, encapsulation describes the idea of bundling data and methods that work on that data within one unit, like a class in Java. This concept is also often used to hide the internal representation, or state of an object from the outside. This is called information hiding.

  <h2><b>Class</b><h2> 
In object-oriented programming, a class is a blueprint for creating objects (a particular data structure), providing initial values for state (member variables or attributes), and implementations of behavior (member functions or methods).


  <h2><b>Object</b></h2> In computer science, an object can be a variable, a data structure, a function, or a method. As regions of memory, they contain value and are referenced by identifiers.

In the object-oriented programming paradigm, object can be a combination of variables, functions, and data structures; in particular in class-based variations of the paradigm it refers to a particular instance of a class.

In the relational model of database management, an object can be a table or column, or an association between data and a database entity (such as relating a person's age to a specific person).

  <h2><b>Instance</b></h2> 

In object-oriented programming (OOP), an instance is a concrete occurrence of any object, existing usually during the runtime of a computer program. Formally, "instance" is synonymous with "object" as they are each a particular value (realization), and these may be called an instance object; "instance" emphasizes the distinct identity of the object. The creation of an instance is called instantiation.

  <h2><b>Interface</b></h2> 
An interface is a description of the actions that an object can do... for example when you flip a light switch, the light goes on, you don't care how, just that it does. In Object Oriented Programming, an Interface is a description of all functions that an object must have in order to be an "X". Again, as an example, anything that "ACTS LIKE" a light, should have a turn_on() method and a turn_off() method. The purpose of interfaces is to allow the computer to enforce these properties and to know that an object of TYPE T (whatever the interface is ) must have functions called X,Y,Z, etc.

  <h2><b>Access Modifiers</b></h2>

Access modifiers (or access specifiers) are keywords in object-oriented languages that set the accessibility of classes, methods, and other members. Access modifiers are a specific part of programming language syntax used to facilitate the encapsulation of components.[1]

  <h2><b>Constructors</b></h2>
	
A constructor is a special method of a class or structure in object-oriented programming that initializes a newly created object of that type. Whenever an object is created, the constructor is called automatically.

-----------------------------------------------------------
	
# Example 
	
<h1>How to use OOP in Typescript?</h1>
	
<p> The first question we have to ask ourselves is, what is typescript and why should I use it?

TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does, but with some added features.

The main reason for using TypeScript is to add static typing to JavaScript. Static typing means that the type of a variable cannot be changed at any point in a program. It can prevent a LOT of bugs!

On the other hand, JavaScript is a dynamically typed language, meaning variables can change type. Here's an example:
``` Javascript
// JavaScript
let foo = "hello";
foo = 55; // foo has changed type from a string to a number - no problem
```
``` Typescript
// TypeScript
let foo = "hello";
foo = 55; // ERROR - foo cannot change from string to number
```

That being said, let's dive in to classes:
	
<b><i>Classes in typescript</i></b>
<p>
Classes in TypeScript, like JavaScript, are a special syntax for its prototypical inheritance model, which is comparable to inheritance in class-based object-oriented languages. Classes are just special functions added to ES6 that are meant to mimic the class keyword from these other languages.</p>
	
We can define the types that each piece of data should be in a class:

This is an example of how classes can define types: 
	
``` Typescript 	
  class Person {
  name: string;
  isCool: boolean;
  pets: number;

  constructor(n: string, c: boolean, p: number) {
    this.name = n;
    this.isCool = c;
    this.pets = p;
  }

  sayHello() {
    return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
  }
}

const person1 = new Person('Danny', false, 1);
const person2 = new Person('Sarah', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.

console.log(person1.sayHello()); // Hi, my name is Danny and I have 1 pets
```
------------------------------------------------------------------------------------------------------------
	
Objects:
	
In JavaScript, the fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types.
As we’ve seen, they can be anonymous:

An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects. The syntax is given below 

Objects in TypeScript must have all the correct properties and value types:

// Declare a variable called person with a specific object type annotation
let person: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

person.isProgrammer = 'Yes'; // ERROR: should be a boolean

person = {
  name: 'John',
  location: 'US',
}; 
// ERROR: missing the isProgrammer property
	
The object is being defined inside of a variable with the correct values in the first line. 
	
When defining the signature of an object, you will usually use an interface. This is useful if we need to check that multiple objects have the same specific properties and value types:	

-------------------------------------------------------------------------------------------------------------------------------
# Encapsulation
	
Encapsulation is a simple concept; it is the process of ensuring accurate protection over certain data (properties) passed back and forth between your application. 
	
class Character {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }
}

In the example, the property _name is private. This means we can’t access this property from outside the class. In order to get access to this private property, we use so-called getter and setter methods.
</p>
---------------------------------------------------------------------------------------------------------
	
Access modifiers: 
	
TypeScript supports access modifiers at the class level. The access modifier in TypeScript is quite useful and recommended because it preserves the security of the class members such as properties and attributes and prevents them from being used inappropriately. 

We can also use it to control the accessibility of the data members of a class so that It can not be used abruptly anywhere in the script file. If the class does not have to be set any access modifier, the TypeScript automatically sets the public modifier access to all class members as a default modifier,

Public - By default, members (properties and methods) of the TypeScript class are public - so you don’t need to prefix members with the public keyword. Public members are accessible everywhere without restrictions even from the multiple level sub-classes without any compile errors.

Private - A private member cannot be accessed outside of its containing class. Private members can be accessed only within the class and even their sub-classes won't be allowed to use their private properties and attributes.

Protected - A protected member cannot be accessed outside of its containing class. Protected members can be accessed only within the class and by the instance of its sub/child class.

In compiled JavaScript code, there will be no such type of restriction on the members.accessmodifiers.ts
	
----------------------------------------------------------------------------------------------------
	
# Constructor

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

There are a few things to keep in mind when diferentiating class constructor signatures and function signatures:

- Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
- Constructors can’t have return type annotations - the class instance type is always what’s returned
	
To sum it up the constructor is a special method of a class for creating and initializing an object instance of that class. 

 A constructor allows you to provide any custom initialization that must be done before any other methods can be called on an instantiated object. 
	
If I don't provide my own constructor, then a default constructor is set. 
	
The default constructor should look like this:
	
``` Typescript
	
constructor() {}

``` 

3. Interface:
	
Week challenges (Wednesday) 💻

1. [Build tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript)	
	
``` Typescript
export const towerBuilder = (nFloors: number): string[] => {
  let tower = new Array();
  let resTower = new Array();
  let initial = '*';
    let str = ' ';
  if(nFloors ==1){
    return  ["*"];
  }
  for( let i = 1; i<= nFloors; i++ ){
    if(i == nFloors){
      tower.push(initial);
    }
    else{
      
    var nesStr =  str.repeat(nFloors-i);
    tower.push(nesStr+initial+nesStr);
    initial += '**';
    }
  }
  
  return tower;
}

2.[Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript)			     
``` Typescript 
	
export const high = (str: string): string => {
  const minScore: string = 'a';
  const words: string[] = str.split(' ');
  let bestWordScore: number = 0;
  let bestMatch: string = '';
  

  for(let i: number = 0; i < words.length; i++) {
    const word: string = words[i];
    let sum: number = 0;
    
    for(let j: number = 0; j < word.length; j++) {
      sum += 1 + word.charCodeAt(j) - minScore.charCodeAt(0);
    }

    if (sum > bestWordScore) {
      bestWordScore = sum;
      bestMatch = word;
    }
  }
  
  return bestMatch;
}			   
```
3.[Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047/solutions)
``` Typescript	
const sumArr = (arr: number[]): number => arr.reduce((prevVal, val) => prevVal + val, 0);

export const findEvenIndex = (arr: number[]): number => arr.findIndex((v, index) => { 
    const leftSide = arr.slice(0, index);
    const rightSide = arr.slice(index + 1);
    
    return sumArr(leftSide) === sumArr(rightSide)
});	
	
```
4. [Meeting](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript)

``` Typescript
	
export function meeting(s: string): string {
  return s.toUpperCase()
          .split(';')
          .map(n => '(' + n.split(':').reverse().join(', ') +')')
          .sort() 
          .join('');
}
```

5. [Street Fighter 2 - Character Selection](https://www.codewars.com/kata/5853213063adbd1b9b0000be/solutions)
	
``` Typescript
	
export function streetFighterSelection(xs: Array<string[]>, p: number[], moves: string[]) {
  const n = xs[0].length;
  const vx = { "up": [-1, 0], "down": [1, 0], "left": [0, -1], "right": [0, 1] };
  const move = v => { p[0] = Math.min(Math.max(p[0] + v[0], 0), 1); p[1] = (((p[1] + v[1]) % n) + n) % n; }
  return moves.reduce((his, m) => (move(vx[m]), his.push(xs[p[0]][p[1]]), his), []);
}

```
Week challenges (Thursday) 💻

1. Watched [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8)
2. Watched [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74)	
3. READ about Abastrat classes and design patterns in typescript(https://sbcode.net/typescript/abstract_classes/)
	
	
# WEEK 7

1. Tic tac toe - Using typescript

Board.ts
	
``` Typescript 
import { Player } from './Player';

type BoardValues = -1 | 0 | 1;
export type UserOption = 0 | 1;
export class Board {
  private board: BoardValues[][] = [];
  private positionMap: Map<number, [number, number]> = new Map();
  private playerOne: string = '🐲';
  private playerTwo: string = '🐼';

  constructor(private rows: number, private columns: number) {
    this.createBoard();
  }

  private createBoard(): void {
    this.board = [];
    this.positionMap = new Map();
    let indicator = 1;
    for (let i = 0; i < this.rows; i++) {
      this.board.push([]);
      for (let j = 0; j < this.columns; j++) {
        this.board[i].push(-1);
        this.positionMap.set(indicator, [i, j]);
        indicator++;
      }
    }
  }

  private checkBoardCellToDisplay(cellValue: number): string {
    if (cellValue === 1) return this.playerOne;
    return this.playerTwo;
  }

  clearBoard(): void {
    for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
      for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
        this.board[i][j] = -1;
      }
    }
  }

  checkValidCellValue(cellNumber: number): boolean {
    return !(typeof this.positionMap.get(cellNumber) === 'undefined');
  }

  checkFullBoard(): boolean {
    let full = true;
    for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
      for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
        if (this.board[i][j] === -1) full = false;
      }
    }
    return full;
  }

  setBoardCellValue(cellNumber: number, value: UserOption): boolean {
    let position = this.positionMap.get(cellNumber)!;
    if (this.board[position[0]][position[1]] !== -1) return false;
    this.board[position[0]][position[1]] = value;
    return true;
  }

  getBoardCellValue(cellNumber: number): BoardValues {
    let position = this.positionMap.get(cellNumber)!;
    return this.board[position[0]][position[1]];
  }

  displayBoard(playerOne: Player, playerTwo: Player): string {
    let indicator = 1;
    let displayedBoard = '';
    for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
      displayedBoard += '\n';
      for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
        displayedBoard += `  ${
          this.board[i][j] === -1
            ? `${indicator} `
            : this.checkBoardCellToDisplay(this.board[i][j])
        }  |`;
        indicator++;
      }
      displayedBoard = displayedBoard.slice(0, -1);
      if (i !== rowslenght - 1) {
        displayedBoard += '\n ------------------';
      }
    }
    return `\n============================\n${playerOne.name}: ${this.playerOne}\n${playerTwo.name}: ${this.playerTwo}\n============================\n${displayedBoard}\n`;
  }
}

```
input.ts
``` Typescript	
import { prompt } from 'enquirer';
export type UserInput = { data: string };
export type UserFormInput = { data: any };
export type UserOption = { data: number };
export type UserOptionById = UserInput;
export type UserConfirm = { data: boolean };
export type Choice = { name: string; message: string };
export type SelectChoice = { option: number; message: string };
type Choices = Choice[] | string[];
type UserOptionAux = { data: string };
type SelectChoices = SelectChoice[];

export class Input {
  static async getInput(message: string): Promise<UserInput> {
    const input: UserInput = await prompt({
      type: 'input',
      name: 'data',
      message: message,
    });
    return input;
  }

  static async getForm(
    message: string,
    choices: Choices
  ): Promise<UserFormInput> {
    const input: UserFormInput = await prompt({
      type: 'form',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getSelect(
    message: string,
    choices: SelectChoices
  ): Promise<UserOption> {
    const input: UserOptionAux = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices.map((choice: SelectChoice) => ({
        name: choice.option.toString(),
        message: choice.message,
      })),
    });
    return { data: Number(input.data) };
  }

  static async getSelectById(
    message: string,
    choices: Choice[]
  ): Promise<UserOptionById> {
    const input: UserOptionById = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getConfirm(message: string): Promise<UserConfirm> {
    const input: UserConfirm = await prompt({
      type: 'confirm',
      name: 'data',
      initial: false,
      message: message,
    });
    return { data: input.data };
  }
}
```
	
Main.ts 
	
``` Typescript 
	
import { TicTacToe } from './TicTacToe';
import { Input, UserOption } from './Input';

export class Main {
  gameMenu = [
    { option: 1, message: 'Start game' },
    { option: 2, message: 'Show last game' },
    { option: 3, message: 'Exit' },
  ];

  async start() {
    let option = -1;
    let input: UserOption;
    let tickTackToe = new TicTacToe();
    while (option !== 3) {
      input = await Input.getSelect('=====TickTackToe=====', this.gameMenu);
      option = input.data;
      switch (option) {
        case 1:
          await tickTackToe.startGame();
          break;
        case 2:
          tickTackToe.showHistory();
          break;
        case 3:
          console.log(`\n
          *******************************************************
          ===========================================
                Enjoy your day! 🙋🏻‍♂️
          ===========================================
          *******************************************************\n`);
          break;
      }
    }
  }
}
	
```
player.ts
	
``` Typescript
	
export class Player {
  get name() {
    return this.nikname;
  }

  set name(name: string) {
    this.nikname = name;
  }
  constructor(private nikname: string) {}
}

```
tictactoe.ts
	
``` Typescript
	
import { Board, UserOption } from './Board';
import { Input, UserInput } from './Input';
import { Player } from './Player';

type History = {
  player: Player;
  move: number;
  value: UserOption;
};

export class TicTacToe {
  private history: History[] = [];
  private endMessage: string = '';
  private board: Board;
  private players!: [Player, Player];

  constructor() {
    this.board = new Board(3, 3);
  }

  private checkFirstRowIsFull(): boolean {
    return (
      this.board.getBoardCellValue(1) === this.board.getBoardCellValue(2) &&
      this.board.getBoardCellValue(2) === this.board.getBoardCellValue(3) &&
      this.board.getBoardCellValue(3) !== -1
    );
  }

  private checkSecondRowIsFull(): boolean {
    return (
      this.board.getBoardCellValue(4) === this.board.getBoardCellValue(5) &&
      this.board.getBoardCellValue(5) === this.board.getBoardCellValue(6) &&
      this.board.getBoardCellValue(6) !== -1
    );
  }

  private checkThirdRowIsFull(): boolean {
    return (
      this.board.getBoardCellValue(7) === this.board.getBoardCellValue(8) &&
      this.board.getBoardCellValue(8) === this.board.getBoardCellValue(9) &&
      this.board.getBoardCellValue(9) !== -1
    );
  }

  private checkFirstColumnIsFull(): boolean {
    return (
      this.board.getBoardCellValue(1) === this.board.getBoardCellValue(4) &&
      this.board.getBoardCellValue(4) === this.board.getBoardCellValue(7) &&
      this.board.getBoardCellValue(7) !== -1
    );
  }

  private checkSecondColumnIsFull(): boolean {
    return (
      this.board.getBoardCellValue(2) === this.board.getBoardCellValue(5) &&
      this.board.getBoardCellValue(5) === this.board.getBoardCellValue(8) &&
      this.board.getBoardCellValue(8) !== -1
    );
  }

  private checkThirdColumnIsFull(): boolean {
    return (
      this.board.getBoardCellValue(3) === this.board.getBoardCellValue(6) &&
      this.board.getBoardCellValue(6) === this.board.getBoardCellValue(9) &&
      this.board.getBoardCellValue(9) !== -1
    );
  }

  private checkDiagonalIsFull(): boolean {
    return (
      this.board.getBoardCellValue(1) === this.board.getBoardCellValue(5) &&
      this.board.getBoardCellValue(5) === this.board.getBoardCellValue(9) &&
      this.board.getBoardCellValue(9) !== -1
    );
  }

  private checkInverseDiagonalIsFull(): boolean {
    return (
      this.board.getBoardCellValue(3) === this.board.getBoardCellValue(5) &&
      this.board.getBoardCellValue(5) === this.board.getBoardCellValue(7) &&
      this.board.getBoardCellValue(7) !== -1
    );
  }

  private checkValidMove(move: number): boolean {
    return this.board.checkValidCellValue(move);
  }

  private checkEndOfGameByWinning(): boolean {
    let lastMove = this.history[this.history.length - 1].move;
    if (lastMove >= 1 && lastMove <= 3) {
      if (this.checkFirstRowIsFull()) return true;
    } else if (lastMove >= 4 && lastMove <= 6) {
      if (this.checkSecondRowIsFull()) return true;
    } else if (lastMove >= 7 && lastMove <= 9) {
      if (this.checkThirdRowIsFull()) return true;
    }
    if (lastMove === 1 || lastMove === 4 || lastMove === 7) {
      if (this.checkFirstColumnIsFull()) return true;
    } else if (lastMove === 2 || lastMove === 5 || lastMove === 8) {
      if (this.checkSecondColumnIsFull()) return true;
    } else if (lastMove === 3 || lastMove === 6 || lastMove === 9) {
      if (this.checkThirdColumnIsFull()) return true;
    }
    if (lastMove === 1 || lastMove === 5 || lastMove === 9) {
      if (this.checkDiagonalIsFull()) return true;
    }
    if (lastMove === 3 || lastMove === 5 || lastMove === 7) {
      if (this.checkInverseDiagonalIsFull()) return true;
    }
    return false;
  }

  private checkEnOfGameByTie(): boolean {
    return this.board.checkFullBoard();
  }

  private move(player: Player, move: number, value: UserOption): boolean {
    if (this.board.setBoardCellValue(move, value)) {
      this.history.push({ player, move, value });
      return true;
    }
    return false;
  }

  private displayGame(): void {
    console.log(this.board.displayBoard(this.players[0], this.players[1]));
  }

  async playersSetup() {
    console.clear();
    let inputUserOne = await Input.getInput('What is the name of the player1?');
    let inputUserTwo = await Input.getInput('What is the name of the player2?');
    let startPlayer = Math.floor(Math.random() * 2);
    this.players = [
      new Player(inputUserOne.data),
      new Player(inputUserTwo.data),
    ];
    if (startPlayer === 1) {
      this.players = [this.players[1], this.players[0]];
    }
    console.log(`\n==== Player: ${this.players[0].name} is starting ====`);
  }

  async startGame() {
    this.endMessage = '';
    this.board.clearBoard();
    await this.playersSetup();
    let endOfGameByWinning = false;
    let endOfGameByTie = false;
    let activePlayer = 0;
    let cellNumber = 0;
    let input: UserInput;
    let errorMessage = '';
    while (!(endOfGameByWinning || endOfGameByTie)) {
      console.clear();
      if (errorMessage) console.log(errorMessage);
      this.displayGame();
      input = await Input.getInput(
        `${this.players[activePlayer].name} choose your cell`
      );
      cellNumber = Number(input.data);
      errorMessage = `⚠️⚠️That's is not a valid cell, try again.⚠️⚠️`;
      if (this.checkValidMove(cellNumber)) {
        errorMessage = `⚠️⚠️That cell was already selected, try again.⚠️⚠️`;
        if (
          this.move(
            this.players[activePlayer],
            cellNumber,
            activePlayer === 0 ? 1 : 0
          )
        ) {
          activePlayer = activePlayer === 0 ? 1 : 0;
          errorMessage = '';
        }
      }
      endOfGameByTie = this.checkEnOfGameByTie();
      endOfGameByWinning = this.checkEndOfGameByWinning();
    }
    console.clear();
    this.displayGame();
    if (endOfGameByWinning)
      this.endMessage = `🥳🥳🥳 ${
        this.players[activePlayer === 0 ? 1 : 0].name
      } won the game!!!`;
    if (endOfGameByTie)
      this.endMessage = `🙃🙃🙃 Nobody won, best luck the next one...`;
    console.log(this.endMessage);
  }

  showHistory(): void {
    console.clear();
    console.log(
      '\n========================PREVIOUS GAME========================================'
    );
    this.board.clearBoard();
    this.displayGame();
    const lastHistory = [...this.history];
    this.history = [];
    lastHistory.forEach((h: History) => {
      this.move(h.player, h.move, h.value);
      this.displayGame();
    });
    console.log(`
      ========================================
      ${this.endMessage}
      ========================================`);
  ```
app.ts 

``` Typescript	    
import { Main } from './Main';
const program = new Main();
program.start();
	  
```
	    
# Week challenges (Tuesday) 💻

1. Generics using Typescript 	
	
Linkedlists.ts 
	
import { Node } from './Node';

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  get size(): number {
    return this.length;
  }

  // First In First Out (FIFO)
  public add(value: T): void {
    if (this.head == null) {
      this.head = new Node(value);
    } else {
      let node = this.head;
      while (node.next !== null) {
        node = node.next;
      }
      node.next = new Node(value);
    }
    this.length++;
  }

  public remove(): void {
    if (this.head !== null) {
      this.head = this.head.next;
      this.length--;
    }
  }

  // Last In First Out (LIFO)
  public addFirst(value: T) {
    if (this.head === null) {
      this.add(value);
    } else {
      let node = new Node(value);
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  public removeLast(): void {
    if (this.head !== null) {
      let node = this.head;
      let previous: Node<T> = node;
      while (node.next !== null) {
        previous = node;
        node = node.next;
      }
      previous.next = null;
      this.length--;
    }
  }

  public toString(): string {
    if (this.head === null) return '[]';
    let representation = '';
    let node = this.head;
    while (node.next !== null) {
      representation = `${representation}${JSON.stringify(node.value)},`;
      node = node.next;
    }
    representation = `${representation}${JSON.stringify(node.value)}`;
    representation = `[${representation}]`;
    return representation;
  }
}
	
2. [Encrypt This!](https://www.codewars.com/kata/5848565e273af816fb000449/train/typescript) 
	
``` Typescript 
	
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

3. [Make the deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript)

``` Typescript	
export function parse(data: string): number[] {
  const result: number[] = []
  const chars: string[] = data.split('')

  let num: number = 0
 
  chars.forEach((char: string) => {
    switch (char) {
      case 'i': num = ++num; break;
      case 'd': num = --num; break;
      case 's': num = num ** 2; break;
      case 'o': result.push(num); break;
    }
  })
 
  return result  
}
```  
# Week challenges (Wednesday) 💻

1. Finished course about generics [here](https://docs.microsoft.com/en-us/learn/modules/typescript-generics/)	    
2. Read about Creating union types [here](https://learntypescript.dev/04/l5-union)
3. Read about Creating intersection [here](https://learntypescript.dev/04/l6-intersection)
4. [Dashasize it](https://www.codewars.com/kata/58223370aef9fc03fd000071/train/typescript)

# Week challenges (Thursday) 💻

1. [Type predicate](https://typescript-exercises.github.io/#exercise=4)    
2. [Count the smiley faces!](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)	    
``` Typescript 
export function countSmileys(arr: string[]) {
  let smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
  let count = 0;

  for (var i=0; i<arr.length; i++){
    for (var j=0; j<smileys.length; j++){
      if (arr[i]===smileys[j]){
        count++;
       }
    }
  }
return count;
}	    
```

3.[Human Readable Time](https://www.codewars.com/kata/52685f7382004e774f0001f7)
	    
``` Typescript
	    
export function countSmileys(arr: string[]) {
  let smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
  let count = 0;

  for (var i=0; i<arr.length; i++){
    for (var j=0; j<smileys.length; j++){
      if (arr[i]===smileys[j]){
        count++;
       }
    }
  }
return count;
}
```
	    
	
	    
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

-----------------------------------------------------------------------------------------------------------------------------------------------
	

Week challenges (Wednesday) 💻
	





Week challenges (Tuesday) 💻
Week challenges (Tuesday) 💻




