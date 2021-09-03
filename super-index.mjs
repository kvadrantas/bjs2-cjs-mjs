// 1. command.js and module.js uses different syntax for exporting and importing objects
// 2. .MJS uses:
//       'export' 
//       'import * as data from "./module-js.mjs";'
//    .CJS uses:
//       'module.exports.suma = suma;
//       'let data = require ("./command-js.cjs")'
// 3. you cannot change exported primitive variable in module.js but you can channge in command.js

import * as f2 from "./index.mjs";
console.log(f2);
console.log(f2.f1.suma(3, 3));
