// // Functions are first class citizens



// // Function expressions
// // var addition = function (num1, num2){
// //     return num1 + num2;
// // }


// // console.log(addition(3,5));
// // console.log(add(3,5));



// // Functions expressions are not hoisted
// // function mystery(){
// //     var chooseNumber = function  (){
// //         return 7;
// //     }
// //     return chooseNumber();
// //     var chooseNumber = function  (){
// //         return 12;
// //     }
// // }

// // console.log(mystery());     //?

// // global.firstName = "";

// var person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getName : function(){
//         var that = this;
//         var nestedFunc = () => {
//             console.log(this);  // 
//             return that.firstName + " " + that.lastName
//         }
//         return nestedFunc();

//     }
// }

// console.log(person.getName());      //?


// // - Rest/Gather Operator 
// // function demo(x, ...params){
// //     console.log(params[0]);     //?
// // }

// // // demo("foo")
// // // demo("foo", "bar")
// // demo("foo", "bar", "bam")


// //Spread operator
// // var arr = [2,3,4];

// // var newArr = [1, ...arr, 5,6];

// // console.log(newArr);

// //Arrow Functions

// //ES5 - without arrow

// // var numbers = [1, 2, 3, 4, 5];

// // var doubledArray = numbers.map(function(value, index){
// //     return value * 2;
// // });

// // var doubledArray = numbers.map( value => value * 2)

// // console.log(doubledArray);  


// IIFE 

// var random = (function(){
//     console.log("IIFE Called!");
//     return Math.floor(Math.random() * 10);
// })();

// console.log(random);


// var myVar = 200;


// function a(){
//     var myVar = 100;
//     function b (){
//         console.log(myVar)          //?
//     }
//     b();
// }

// a();


// Closures
// function testClosure() {
//     var x = 4;
//     return function () {
//         return ++x;
//     }
// }

// var closureFunc = testClosure();

// console.log(testClosure()());       //5
// console.log(testClosure()());       //5
// console.log(testClosure()());       //5
// console.log(testClosure()());       //5


// console.log(closureFunc());        // 5
// console.log(closureFunc());        // 
// console.log(closureFunc());        // 
// console.log(closureFunc());        // 
// console.log(closureFunc());        // 

// Working of JQuery lib

// var FOO = function(){
//     var x = 4;
//     return {
//         hello : function(){
//             console.log("Hello");
//         }
//     }
// }

// FOO().hello().hi()


