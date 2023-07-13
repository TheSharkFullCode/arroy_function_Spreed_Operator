// alert("hola mundo");

// Exercise 1
// Reescribe el código para usar destructuring en vez de asignar cada variable individualmente.

let item = ["Egg", 0.25, 12];
// let name = item[0];
// let price = item[1];
// let quantity = item[2];

const [Name,price, quantity ] = item;

console.log(`Item: ${Name}, Quantity: ${quantity}, Price: ${price}`);

// Exercise 2
// Reescribe el código para asignar a cada variable el número correcto.
let numbers = [3, 5, 4, 2, 6, 1];
numbers = numbers.sort();
// console.warn(numbers);
let [one, two, three, four, five, six] = numbers;

console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
console.log('----Ejercicio 3---------');


// Exercise 3
// Tenemos el objeto user. Desestructura sus propiedades en las variables name, age y isAdmin (esta última no existe, tendrás que crear un valor predeterminado false).

let user = { name: "John", years: 30 };

let {name, years:age,isAdmin = false} = user;

console.log(name);
console.log(age); 
console.log(isAdmin); 
console.log('-------Ejercicio 4-------');

// Exercise 4
// Reescribe el código para desestructurar el array.

let person = [12, "Chris", "Owen"];

// let firstName = person[1];
// let lastName = person[2];
// let age = person[0];

const [age4,firstName,lastName] = person;

console.warn(`Person - Age: ${age}, Name: ${firstName} lastName: ${lastName}`);
console.log('------Ejercicio 5------------>');


// Exercise 5
// Reescribe el código para usar desestructuring, teniendo en cuenta que no debes crear ninguna variable vacía:

 let person5 = ["Chris", 12, "Owen"];

// let firstName = person[0];
// let lastName = person[2];

const [firstName5,age5,lastName5] = person5
 console.log(`Name: ${firstName} ${lastName}`);

console.log('--------Exercise 6------------');
// Desestructura el último elemento del array.

const students = ['Christina', 'Jon', 'Alexandare'];

const [name6,age6,lastName6] = students;

console.log(lastName6);
console.log('---***----Ejercicio 7-----****---');
// Exercise 7
// Usando destructuring, obtén sólo los nombres de los arrays dentro del array.

const moreStudents = [ ['Chris'],['Ahmad', 'Antigoni'],	['Toby', 'Sam']];

const [Chris,Ahmad,Antigoni,Toby,Sam] = moreStudents;
console.log(Sam);

// console.log(student1,student2,student3);
// console.log(student1, student2, student3, student4);