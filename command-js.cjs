// 1. command.js and module.js uses different syntax for exporting and importing objects
// 2. .MJS uses:
//       'export' 
//       'import * as data from "./module-js.mjs";'
//    .CJS uses:
//       'module.exports.suma = suma;
//       'let data = require ("./command-js.cjs")'
// 3. you cannot change exported primitive variable in module.js but you can channge in command.js

function suma(a, b) {
    return a + b;
};

function skirtumas(a, b) {
    return a - b;
};

let a = 10;

console.log(module); 

module.exports.suma = suma;
module.exports.skirtumas = skirtumas;
module.exports.a = a;
// console.log(module);