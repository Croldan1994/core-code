# core-code
Core Code bootcamp
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
<h1>Wednesday Assignments</h1>

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

WEEK 2 challenges 

<h1>Monday</h1>

1. Finished Git course. https://classroom.udacity.com/courses/ud123
2. Finished Data Types video: https://www.youtube.com/watch?v=A37-3lflh8I
3. Read the article about basic operations: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math
4. Created my codewars profile: https://www.codewars.com/users/Croldan1994


<h1>Tuesday</h1>

1. Watched video on how to google as a software engineer: https://www.youtube.com/watch?v=cEBkvm0-rg0
2. https://www.codewars.com/kata/50654ddff44f800200000004 

![image](https://user-images.githubusercontent.com/88641189/153101528-889aed1c-94e3-44a3-8457-e9ae94747c28.png)

3. https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript

![image](https://user-images.githubusercontent.com/88641189/153103042-e9d19497-0165-4bcf-8894-2e4a20e31bae.png)

4. https://www.codewars.com/kata/55ad04714f0b468e8200001c/train/javascript

![image](https://user-images.githubusercontent.com/88641189/153103206-9e06f2e6-3f9a-47f4-93d9-a762ad66cd05.png)

5. https://www.codewars.com/kata/5ad0d8356165e63c140014d4/train/javascript

![image](https://user-images.githubusercontent.com/88641189/153103418-80a0b73a-8b56-49bb-a72c-197b59bba9a4.png)


<h2>Wednesday</h2>

1. https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

![image](https://user-images.githubusercontent.com/88641189/153104755-f124c4ce-77e4-46df-96e0-6cf7c4d30cb0.png)


2. https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

![image](https://user-images.githubusercontent.com/88641189/153106138-f3b0809f-a45f-4699-9802-151887409ee2.png)

3. https://www.codewars.com/kata/5f77d62851f6bc0033616bd8

![image](https://user-images.githubusercontent.com/88641189/153106323-bceb3876-d1bc-4a25-880e-72ec74ff4cc4.png)

4. https://www.codewars.com/kata/57eae65a4321032ce000002d

![image](https://user-images.githubusercontent.com/88641189/153106442-63efb418-b1aa-49bb-bdf8-06470f09fe18.png)

<h2>Thursday</h2>

1. https://www.codewars.com/kata/57faece99610ced690000165/train/javascript

![image](https://user-images.githubusercontent.com/88641189/153106681-b21ab1ee-771a-496f-be5b-5af4ead84364.png)

2. https://www.codewars.com/kata/5547929140907378f9000039

![image](https://user-images.githubusercontent.com/88641189/153107036-ffa7d863-bbd8-4395-890b-5de2cd5afad8.png)

3. https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript 

![image](https://user-images.githubusercontent.com/88641189/153109551-179d7337-ef4e-4997-9c5d-998239d34ea9.png)

4. https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

![image](https://user-images.githubusercontent.com/88641189/153109946-57bdbd87-4b32-455f-8de1-590902d482a6.png)


<h1>Mission statement</h1>

<p>My name is Carlos and I'm a front end developer. I am self taught and I currently work with the following tech stack: HTML, CSS, Javascript, NodeJS for backend, React. I've been building modern websites for over a year now and I am so thrilled to work in the tech industry. Perseverance and discipline are able to get you anywhere you want, that's my main motto.</p>
 




WEEK 3 

<h1>Monday Assignments</h1>

1. Codewars solution: Who likes this? 
<p>function likes(names) {
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
}</p>











