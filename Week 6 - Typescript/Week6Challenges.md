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
      new MenuElement('Wonton Soup (Chicken)', 2.25, '????'),
      new MenuElement('Chicken Corn Soup', 1.95, '????'),
      new MenuElement('Vegetable Corn Soup', 2.25, '????'),
    ];

    this.chefSpecialsOptions = [
      new MenuElement('Orange Beef', 8.95, '????'),
      new MenuElement('Kung Pao Shrimp', 8.5, '????'),
    ];

    this.chickenOptions = [
      new MenuElement('Lemon Chicken', 9.95, '????'),
      new MenuElement('Sesame Chicken', 9.95, '????'),
      new MenuElement('Hunan Chicken', 10.5, '????'),
    ];

    this.beefOptions = [
      new MenuElement('Pepper Steak', 9.95, '????'),
      new MenuElement('Manchurian Beef', 11.95, '????'),
    ];

    this.beveragesOptions = [
      new MenuElement('Pi??a Colada', 3.0, '????'),
      new MenuElement('Spanish Coffee', 5.5, '???'),
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
                Enjoy your meal! ?????????????????
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
    if (this.guns) return '????';
    return '?????????????????';
  }

  expectMartialArts(): string {
    if (this.martial_arts) return '????????';
    return '?????????????????';
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
    if (this.ghosts) return '????';
    return '?????????????????';
  }

  expectVisions(): string {
    if (this.visions) return '????';
    return '?????????????????';
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
    console.log('???????????? Jump Scare has been added!');
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
    console.log('???????????? Explosion has been added!');
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
As we???ve seen, they can be anonymous:

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

In the example, the property _name is private. This means we can???t access this property from outside the class. In order to get access to this private property, we use so-called getter and setter methods.
</p>
---------------------------------------------------------------------------------------------------------
	
Access modifiers: 
	
TypeScript supports access modifiers at the class level. The access modifier in TypeScript is quite useful and recommended because it preserves the security of the class members such as properties and attributes and prevents them from being used inappropriately. 

We can also use it to control the accessibility of the data members of a class so that It can not be used abruptly anywhere in the script file. If the class does not have to be set any access modifier, the TypeScript automatically sets the public modifier access to all class members as a default modifier,

Public - By default, members (properties and methods) of the TypeScript class are public - so you don???t need to prefix members with the public keyword. Public members are accessible everywhere without restrictions even from the multiple level sub-classes without any compile errors.

Private - A private member cannot be accessed outside of its containing class. Private members can be accessed only within the class and even their sub-classes won't be allowed to use their private properties and attributes.

Protected - A protected member cannot be accessed outside of its containing class. Protected members can be accessed only within the class and by the instance of its sub/child class.

In compiled JavaScript code, there will be no such type of restriction on the members.accessmodifiers.ts
	
----------------------------------------------------------------------------------------------------
	
# Constructor

Class constructors are very similar to functions. You can add parameters with type annotations, default values, and overloads:

There are a few things to keep in mind when diferentiating class constructor signatures and function signatures:

- Constructors can???t have type parameters - these belong on the outer class declaration, which we???ll learn about later
- Constructors can???t have return type annotations - the class instance type is always what???s returned
	
To sum it up the constructor is a special method of a class for creating and initializing an object instance of that class. 

 A constructor allows you to provide any custom initialization that must be done before any other methods can be called on an instantiated object. 
	
If I don't provide my own constructor, then a default constructor is set. 
	
The default constructor should look like this:
	
``` Typescript
	
constructor() {}

``` 

3. Interface:
	
Week challenges (Wednesday) ????

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
Week challenges (Thursday) ????

1. Watched [Object Oriented Programming - The Four Pillars of OOP](https://www.youtube.com/watch?v=1ONhXmQuWP8)
2. Watched [Abstract Classes vs Interfaces](https://www.youtube.com/watch?v=Lnqmde9LP74)	
3. READ about Abastrat classes and design patterns in typescript(https://sbcode.net/typescript/abstract_classes/)
