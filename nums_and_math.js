// const score =400;
// console.log(typeof score);


const balance= new Number(135762346.970);
// console.log(typeof balance);


// %%%%%%%%%%%%%% .length will show the length of the string 
// console.log(balance.toString().length);

// %%%%%%%%%%%%%%.tofixed will also return round off value;
// console.log(balance.toFixed());

// %%%%%%%%%%%%%%  to.precision will only show the value given in the method
// console.log(balance.toPrecision(5));

// console.log(balance.toLocaleString());
// console.log(balance.toLocaleString("In-en"));

// console.log(`The maximum value can be ${balance} `);


                         // ****************Maths
// //   %%%%%%%%%%%%%%(**) double start will square the number .
// console.log((89**4)**2);

// // %%%%%%%%%%%%%%.abs will always return postive value / it convert -ve number into postive number.
// console.log(Math.abs(-40));

// //  %%%%%%%%%%%%%%.floor will return lowest value if it is 9.6 - so it will return 9 
// //  %%%%%%%%%%%%%%.ceil is opposite of .floor it will return 10 or it will round of the value.
// console.log((Math.floor(5.9) + (Math.ceil(5.6))));

// // %%%%%%%%%%%%%%.round will roundof the value which is been given;
// console.log(Math.round(5.4));

// // %%%%%%%%%%%%%% .sqrt will show you the that number which is given is root of ;
// console.log(Math.sqrt(49));

// // %%%%%%%%%%%%%%.min will return the lowers/ smallest value given in the array
// // %%%%%%%%%%%%%%.max will return the highest value given in the array
// console.log(Math.min(56,346,634,78,345))
// console.log(Math.max(56,346,634,78,345))

// // %%%%%%%%%%%%%%%%%.random will always generate random value b/w 0 & 1 ;

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min= 10;
const max=20;
console.log(Math.floor(Math.random() * (max - min + 1) + min ));
