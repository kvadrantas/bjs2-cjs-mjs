export function suma(a, b) {
    return a + b;
};

export function skirtumas(a, b) {
    return a - b;
};

function daugyba(a, b) {
    return a * b;
};

function dalyba(a, b) {
    return a / b;
};

let a = 10;

export {
    daugyba as default,
    dalyba,
    a
};

// console.log(module); // Neveiks, nes module yra tik command js'e - .cjs

