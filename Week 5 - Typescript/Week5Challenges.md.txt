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
