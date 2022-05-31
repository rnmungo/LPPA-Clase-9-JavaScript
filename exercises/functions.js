// Exercise A
const suma = (a, b) => a + b;
const resultadoA = suma(3, 4);
console.log(resultadoA);

// Exercise B
const sumaValidada = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los valores no es un número');
        return NaN;
    }

    return a + b;
};
const resultadoB = sumaValidada(3, 4);
console.log(resultadoB);

// Exercise C
const validateInteger = number => Number.isInteger(number);
console.log(validateInteger(10));
console.log(validateInteger('hello'));
console.log(validateInteger(10.5));

// Exercise D
const sumaRedondeada = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los valores no es un número');
        return NaN;
    }

    if (!validateInteger(a) || !validateInteger(b)) {
        alert('Alguno de los valores tiene decimales');
    }

    return Math.round(a) + Math.round(b);
};
console.log(sumaRedondeada(10.5, 10));

// Exercise E
const sumaA = (a, b) => sumaRedondeada(a, b);
console.log(sumaA(10.5, 10));
console.log(sumaA(10, 10));
console.log(sumaA('10', '10'));
