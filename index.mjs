import * as f1 from "./module-js.mjs"; // imports all exported functions from provided .mjs file
import defaultas from "./module-js.mjs"; // importing only default exported function
console.log(f1);
console.log(f1.suma(1, 2));
console.log(defaultas);
console.log(defaultas(2, 3));
console.log(f1.a);

let b = 3;
export {
    b,
    f1,
}


// f1.a = 11;   Error you cannot change exported primitive variable

