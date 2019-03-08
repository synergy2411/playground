
// var friends = ["F1", "F2", "F3"];
// var person = {
//     "lastName" : "Bar",
//     "age" : 32,
//     "friends" : friends,
//     addFriend : function(name){
//         this.friends.push(name);
//     },
//     "getName" : function(){
//         return this.firstName + " " + this.lastName;
//     },
//     "# of frineds" : 3
// }

// person.addFriend("F4");

// console.log(person.friends.length);     //4
// console.log(friends.length);     // 4

// person.firstName = "Foo";

// console.log(person.getName());

// console.log(person["# of friends"])


// var a = {
//     firstName : "A"
// }

// var b = a;

// b.firstName = "B";

// console.log(a.firstName);       //?

// var person = {
//     firstName : "Foo"
// }

// console.log(delete person.firstName);       // true
// console.log(delete person.lastName);       // true


// Constructor Method

// function Person(fname, lname){
//     // var this = {}
//     var that = {};
//     this.fname = fname;
//     this.lname = lname;
//     this.getFullName = function(){
//         return this.fname + " " + this.lname;
//     }
//     return that;
//     // return this;
// }

// var foo = new Person("Foo", "Bam")
// console.log(foo.getFullName());

// var bar = new Person("Bar", "Bas")
// console.log(bar.getFullName());


// Instance Method

// var Shoe = {
//     size : 8,
//     gender : "Women"
// }

// var magicShoe = Object.create(Shoe);

// console.log(magicShoe.size);        // 8

// console.log(magicShoe.hasOwnProperty("size"));      // ?

// console.log(magicShoe.isPrototypeOf(Shoe))    // ?
// console.log(Object.prototype.isPrototypeOf(Shoe))    // ?
// console.log(Object.prototype.isPrototypeOf(magicShoe))    // ?


//Prototyping

// var str = "Some String";
// console.log(str.length);        //11

// Object hierarchy in JS

// - Object (constructor, hasOwnProperty(), isPrototypeOf(), valueOf(), toString())
    // - String (length, indexOf, charAt()....)
    // - str
    // - Date (now(), getYear()...)
    // - Number (isFixed() etc)
    // - Boolean (isBoolean())
    // - Function (name, call(), apply(), bind() )
    // - Person (firstName, lastName , getFullName(), sayHello())
    // -    foo


// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullNAme = function(){
//         // return full name;
//     }
// }
// Person.prototype.sayHello = function(){
//     console.log("Hello " + this.firstName);
// }

// let foo = new Person("Foo", "Bar");
// foo.sayHello();
// let foo1 = new Person("Foo1", "Bar");
// foo1.sayHello();

// console.log(foo.constructor);


// Extend 'String' default

// var str = "Welcome to Node!";
// var str1 = "Welcome to JavaScript!";

// String.prototype.countAll = function (letter) {
//     var counter = 0;
//     for (var i = 0; i < this.length ; i++) {
//         if (this.charAt(i).toUpperCase() === letter.toUpperCase()) {
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(str.countAll('o'));
// console.log(str1.countAll('e'));



var person = {
    firstName : "Foo"
}

var foo = {};

foo.__proto__ = person;

console.log(foo.firstName);     //
