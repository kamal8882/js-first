// const can't be changed / not allowed ;
const accountId = 1234;

// "let" and "var" can be redefined;
let accountEmail = "kamal@google.com";
var accountPass = "kamal12345";

accountCity = "New Delhi";

accountEmail = "sagar@ms.com";
accountPass = "sagar2345";
accountCity = "delhi";

console.log(accountId);
// .table ([xyz, abc , efg....])
console.table([accountEmail,accountPass,accountCity,accountId]);
    