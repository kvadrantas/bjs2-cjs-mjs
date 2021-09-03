// 1. command.js and module.js uses different syntax for exporting and importing objects
// 2. .MJS uses:
//       'export' 
//       'import * as data from "./module-js.mjs";'
//    .CJS uses:
//       'module.exports.suma = suma;
//       'let data = require ("./command-js.cjs")'
// 3. you cannot change exported primitive variable in module.js but you can channge in command.js

let f1 = require ("./command-js.cjs");
console.log(f1);
f1.a = 11;
console.log(f1.a);
