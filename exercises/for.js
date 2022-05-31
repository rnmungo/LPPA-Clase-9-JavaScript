// Exercise A
const words = ['one', 'two', 'three', 'four', 'five'];
for (let i = 0; i < words.length; i += 1) {
    alert(words[i]);
}

// Exercise B
words.forEach(word => {
    const title = word[0].toUpperCase() + word.substring(1).toLowerCase();
    alert(title);
});

// Exercise C
let sentence = '';
for (let i = 0; i < words.length; i += 1) {
    sentence += words[i];
}
alert(sentence);

// Exercise D
const numbers = [];
for (let i = 0; i < 10; i += 1) {
    numbers.push(i);
}
console.log(numbers);
