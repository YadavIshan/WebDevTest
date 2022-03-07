//Disclaimer: Ignore my English
// // < --------------Question 1----------------->

const exp = require("constants")

const { existsSync } = require("fs")

    
// let randomValue = { name: "Lydia" };
// randomValue = 23;

// if (!typeof randomValue === "string") {
//   console.log("It's not a string!");
// } else {
//   console.log("Yay it's a string!");
// }

// A: It's not a string!
** B: Yay it's a string!
// C: TypeError
// D: undefined
Explaination: let  can be reinitialised but cant be redecalred so , it got update to a number and (number===string)
return false and (!)Symbol converted it into true thus returning us option B

// // < --------------Question 2----------------->

// const user = {
// 	email: "my@email.com",
// 	updateEmail: function (email){
// 		this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)

// A: my@email.com
** B: new@email.com
// C: undefined
// D: ReferenceError
Explaination:We are invoking a  fucntion call and updating the given email with the email passed
as arguement

// // < --------------Question 3----------------->
// const fruit = ['🍌', '🍊', '🍎']

// fruit.slice(0, 1)
// fruit.splice(0, 1)
// fruit.unshift('🍇')

// console.log(fruit)

// A: ['🍌', '🍊', '🍎']
// B: ['🍊', '🍎']
** C: ['🍇', '🍊', '🍎']
// D: ['🍇', '🍌', '🍊', '🍎']
Explaination: So when we sliced the array no change will take place as slice method returns the
sliced array and doesnt change our original Array , then when we use splice method it will remove our first 
element and return the changed array so our array will be ['🍊', '🍎'] , then unshift method will add an element(Grapes)
to the beginning of our array
// // < --------------Question 4----------------->

// let count = 0;
// const nums = [0, 1, 2, 3];

// for(var i in nums){
// 	if (i) count += 1
// }

// console.log(count)

// A: 1
// B: 2
// C: 3
** D: 4
Explaination: So in JavaScript Number = 0 , if used in if statement will act as False condition and if block
wont be executed but as 0 in array ([0]) is  considered as true value , so it will execute our if block and as 
every positive value > 0 , is considered as true our count will be incremented for every values 

// // < --------------Question 5----------------->

// const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

// /* 1 */ emojis.push('🦌');
// /* 2 */ emojis.splice(0, 2);
// /* 3 */ emojis = [...emojis, '🥂'];
// /* 4 */ emojis.length = 0;
// A: 1
// B: 1 and 2
// C: 3 and 4
** D: 3
Explaination :every statement is valid except 3 because you can add or make changes to your array of const type
but it cannot  referenc to another array

// // < --------------Question 6----------------->
// // for this ques read this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

// const add = function (x) {
//     return x + x;
// }

// function myFunc(num = 2, value = add(num)) {
//   console.log(num, value);
// }

// myFunc();
// myFunc(3);

** A: 2 4 and 3 6
// B: 2 NaN and 3 NaN
// C: 2 Error and 3 6
// D: 2 4 and 3 Error
Explaination : so if we have note passed an argument to function then if the parameter is defined to some default
value then that default value will be applied on parameter

// // < --------------Question 7----------------->
// // for this question google what Object.freeze does 
const person = {
  name: 'Lydia Hallie',
  address: {
    street: '100 Main St',
  },
};

Object.freeze(person);

// A: person.name = "Evan Bacon"
// B: delete person.address
** C: person.address.street = "101 Main St"
// D: person.pet = { name: "Mara" }
Explaination : As its Name , Freeze method freeze/Blocks and object from being modify no changes can be made on
freezed object , but in code we have freezed the obj person and as we can see in address we have used another
object , which is not freezed thats why changes can be made to address .
To freezed address to we can use Object.freeze(person.address)

// // < --------------Question 8----------------->
// // for this question google what Object.seal does 
// const person = { name: 'Lydia Hallie' };

// Object.seal(person);
** A: person.name = "Evan Bacon"
// B: person.age = 21
// C: delete person.name
// D: Object.assign(person, { age: 21 })
Explaination : only option A will be executed as Seal method allow us to change value of already defined property
untill its writable and it prevents new property from being added and removed

// // < --------------Question 9----------------->
// // read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

// console.log(emojis.flat(1));
// A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
** B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// D: ['🥑', '✨', '✨', '🍕', '🍕']
Explaination : new array with one outer array removed will be return as ['🥑', ['✨', '✨', ['🍕', '🍕']]] in this there
were two element in an array 🥑 and ['✨', '✨', ['🍕', '🍕']] and second element is having subarray in emojis[1][2] , so
these two element got merged ans as emoji was subpart of emoji[1] no effect took place on it

// // < --------------Question 10----------------->

// const randomValue = 21;

// function getInfo() {
//   console.log(typeof randomValue);
//   var randomValue = 'Lydia Hallie';
// }

// getInfo();
// A: "number"
// B: "string"
** C: undefined
// D: ReferenceError
Explaination : as we know that in execution context of fucntion randomValue is defined in then memory area as undefined
in beginning , and fucntion gives priority to local variable with same name more than global so no error will be generated
and we have printed it before intialising thats why we got undefined

// // < --------------Question 11----------------->

// const add = function (x) {
//     function inner (y) {
//         function innermost (z) {
//             console.log(x, y, z);
//             return x + y + z;
//         }
//         innermost(6);
//     }
//     inner(5);
// }

// add(4);

** A: 4 5 6
// B: 6 5 4
// C: 4 function function
// D: undefined undefined 6
Explaination : as x y is global variable for innermost function or x y z will be printed and we havent stored/printed
sum value which is written so 15 wont be printed
// // < --------------Question 12----------------->
// // read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

// const groceries = ['banana', 'apple', 'peanuts'];

// if (groceries.indexOf('banana')) {
// console.log('We have to buy bananas!');
// } else {
// console.log(`We don't have to buy bananas!`);
// }

// A: We have to buy bananas!
// B: We don't have to buy bananas
// C: undefined
// D: 1
Explaination : index of will return 0 (Number) and 0 is treated as false and else part will be executed ,to print if part
we can use if([groceries.indexOf('banana')]) , because [0] is treated as true

// // < --------------Question 13----------------->
// // read:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// const person = {
//   firstName: 'Lydia',
//   lastName: 'Hallie',
//   pet: {
//     name: 'Mara',
//     breed: 'Dutch Tulip Hound',
//   },
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(person.pet?.name);
// console.log(person.pet?.family?.name);
// console.log(person.getFullName?.());
// console.log(member.getLastName?.());

// A: undefined undefined undefined undefined
 B: Mara undefined Lydia Hallie ReferenceError
// C: Mara null Lydia Hallie null
// D: null ReferenceError null ReferenceError
Explaination : 
A will return pet Name
B will return undefined as family name doesnt exists
C will return first name and last name
D will throw error as member is not defined in our code

// // < --------------Question 14----------------->

// let num = 1;
// const list = ['🥳', '🤠', '🥰', '🤪'];

// console.log(list[(num += 1)]);
// A: 🤠
// B: 🥰
// C: SyntaxError
// D: ReferenceError
Explaination : we are basically printing value of list present at 2nd index , as num was 1 and after incrementing it 
will be 2

// // < --------------Question 15----------------->
// // read:https://www.w3schools.com/react/react_es6_spread.asp
// function sumValues(x, y, z) {
//   return x + y + z;
// }
// A: sumValues([...1, 2, 3])
// B: sumValues([...[1, 2, 3]])
** C: sumValues(...[1, 2, 3])
// D: sumValues([1, 2, 3])
Explaination : only option c will return us desired output
A will throw error as 1 is not an array
B : it will act like [[1,2,3],undefined,undefined] and it will concatenate all of them
D : it will behave same like B
// // < --------------Question 16----------------->
// // revise default paramters and spred operator 
// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// const changeAge = (x = { ...person }) => (x.age += 1);
// const changeAgeAndName = (x = { ...person }) => {
//   x.age += 1;
//   x.name = 'Sarah';
// };

// changeAge(person);
// changeAgeAndName();

// console.log(person);
// A: {name: "Sarah", age: 22}
// B: {name: "Sarah", age: 23}
** C: {name: "Lydia", age: 22}
// D: { name: "Lydia", age: 23 }
Explaination : if we wont pass arguement ,the x will be creating a default copy of the person , in changeAge we passed the obj 
itself and in changeAgeAndName a copy is craeted thats why changeAge has incremented the age while changeAgeAndName 
made no change
// // < --------------Question 17----------------->

// const food = ['🍕', '🍫', '🥑', '🍔'];
// const info = { favoriteFood: food[0] };

// info.favoriteFood = '🍝';

// console.log(food);
** A: ['🍕', '🍫', '🥑', '🍔']
// B: ['🍝', '🍫', '🥑', '🍔']
// C: ['🍝', '🍕', '🍫', '🥑', '🍔']
// D: ReferenceError
Explaination : we are not making any changes in food thus it remain same

// // < --------------Question 18----------------->

// const colorConfig = {
//   red: true,
//   blue: false,
//   green: true,
//   black: true,
//   yellow: false,
// };

// const colors = ['pink', 'red', 'blue'];

// console.log(colorConfig.colors[1]);
// A: true
// B: false
// C: undefined
** D: TypeError
Explaination : as color is not a key of colorConfig , thats why it will throw error

// // < --------------Question 19----------------->

// function nums(a, b) {
//   if (a > b) console.log('a is bigger');
//   else console.log('b is bigger');
//   return
//   a + b;
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));

// A: a is bigger, 6 and b is bigger, 3
** B: a is bigger, undefined and b is bigger, undefined
// C: undefined and undefined
// D: SyntaxError
Explaination : after return nothing is written so interpreter will only consider return and will return undefined value

// // < --------------Question 20----------------->
// // read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const [x, y] of Object.entries(person)) {
//   console.log(x, y);
// }
** A: name Lydia and age 21
// B: ["name", "Lydia"] and ["age", 21]
// C: ["name", "age"] and undefined
// D: Error
Explaination : entries will return an array of {key,value} pair

// // < --------------Question 21----------------->

// let newList = [1, 2, 3].push(4);

// console.log(newList.push(5));
// A: [1, 2, 3, 4, 5]
// B: [1, 2, 3, 5]
// C: [1, 2, 3, 4]
** D: Error

// // < --------------Question 22----------------->
// console.log('I want pizza'[0]);
// A: """
** B: "I"
// C: SyntaxError
// D: undefined
Explaination : it will be considered as array/string and 0 element of it will be printed
// // < --------------Question 23----------------->

// function checkAge(age) {
//   if (age < 18) {
//     const message = "Sorry, you're too young.";
//   } else {
//     const message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(21));
// A: "Sorry, you're too young."
// B: "Yay! You're old enough!"
** C: ReferenceError
// D: undefined
Explaination : scope of message is within its local body and as no message was decalred in scope of function , it will
throw error
// // < --------------Question 24----------------->

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// let city = person.city;
// city = 'Amsterdam';

// console.log(person);
** A: { name: "Lydia", age: 21 }
// B: { name: "Lydia", age: 21, city: "Amsterdam" }
// C: { name: "Lydia", age: 21, city: undefined }
// D: "Amsterdam"
Explaination : if certain key/property is not present then it will return undefined but , we didnt add any extra property
in our object thats why original array is printed

// // < --------------Question 25----------------->

// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);
// A: { admin: true, user: { name: "Lydia", age: 21 } }
** B: { admin: true, name: "Lydia", age: 21 }
// C: { admin: true, user: ["Lydia", 21] }
// D: { admin: true }
Explaination : ... will copy all the keys and value of user and will add in admin
// // < --------------Question 26----------------->

// console.log(3 + 4 + '5');
// A: "345"
** B: "75"
// C: 12
// D: "12"
Explaination : not sure , but something to do with ASCII
// // < --------------Question 27----------------->

// const person = {
//   name: 'Lydia',
//   age: 21,
// };

// for (const item in person) {
//   console.log(item);
// }

// A: { name: "Lydia" }, { age: 21 }
** B: "name", "age"
// C: "Lydia", 21
// D: ["name", "Lydia"], ["age", 21]
Explaination : item will only point toward key of obj , if you want to print value alongside key , we can use Object.entries
method

// // < --------------Question 28----------------->

// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// A: [1, 2, 3, 7 x null, 11]
// B: [1, 2, 3, 11]
** C: [1, 2, 3, 7 x empty, 11]
// D: SyntaxError
Explaination : at 9 index eleven will be there  , anf 3-8 it will be empty
// // < --------------Question 29----------------->

// const person = { name: 'Lydia' };

// function sayHi(age) {
//   return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));
// A: undefined is 21 Lydia is 21
// B: function function
// C: Lydia is 21 Lydia is 21
** D: Lydia is 21 function

// // < --------------Question 30----------------->

// var num = 8;
// var num = 10;

// console.log(num);
// A: 8
** B: 10
// C: SyntaxError
// D: ReferenceError
Explaination : var can be redecalred and reinitialised.