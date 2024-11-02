//  type of primitive  : "string", number, bigint(n), boolean(true, false), null, undefined, symbol;
//  types of non primitive : object, function(){}, array[]

let no = Symbol(123)
let no2 = Symbol(123)
console.log(no);
console.log(no2);
// console.log( no === no2);

// let bigInt = 4523453453n
// console.log(typeof bigInt);

// let kamal = function() {
    // console.log("hello world");
// }
// console.log(typeof kamal);


// ************************************Stack
//  in stack memory you cant change the original you Will get the copy of original in which changes takes place

// ************************************Heap
//  in heap memeory changes thats place in original data
// let user ={
//     name :"kamal",
//     age:22,
//     email : "kamal@google.com"
// }

// let user2= user;
// user2.name =  "sagar";
// console.log(user.name);
// console.log(user2.name);



