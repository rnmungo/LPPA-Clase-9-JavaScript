// Exercise A
const lowerString = 'hello world';
console.log(lowerString.toUpperCase())

// Exercise B
const subString = lowerString.substring(0, 5);
console.log(subString);

// Exercise C
const endSubString = lowerString.substring(lowerString.length - 3);
console.log(endSubString);

// Exercise D
const title = lowerString[0].toUpperCase() + lowerString.substring(1).toLowerCase();
console.log(title);

// Exercise E
const index = lowerString.indexOf(' ');
console.log(index);

// Exercise F
const capitalized = lowerString
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(' ');
console.log(capitalized);
