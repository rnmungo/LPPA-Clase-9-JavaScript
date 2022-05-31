// Exercise A
const random = Math.random();
if (random >= 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}

// Exercise B
const age = 90;
if (age < 2) {
    alert('Bebe');
} else if (age >= 2 && age <= 12) {
    alert('Niño');
} else if (age >= 13 && age <= 19) {
    alert('Adolescente');
} else if (age >= 20 && age <= 30) {
    alert('Adulto');
} else if (age >= 61 && age <= 75) {
    alert('Adulto mayor');
} else {
    alert('Anciano');
}
