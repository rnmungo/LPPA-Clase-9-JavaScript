// Exercise A
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(months[4], months[10]);

// Exercise B
const sortedMonths = [...months].sort();
console.log(sortedMonths);

// Exercise C
const expanded = [...months];
expanded.unshift('not-a-months');
expanded.push('not-a-months');
console.log(expanded);

// Exercise D
const reduced = [...months];
reduced.shift();
reduced.pop();
console.log(reduced);

// Exercise E
const reverted = [...months].reverse();
console.log(reverted);

// Exercise F
const concat = months.join('-');
console.log(concat);

// Exercise G
const copied = months.slice(4, 11);
console.log(copied);
