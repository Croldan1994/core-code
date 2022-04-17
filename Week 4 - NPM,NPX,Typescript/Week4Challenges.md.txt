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
