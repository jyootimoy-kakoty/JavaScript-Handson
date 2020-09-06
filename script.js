console.log('Hello JavaScript!');

var firstName = "Jyootimoy";
var lastName = "Kakoty";

console.log("Hello!! " + firstName + " " + lastName);

var age = prompt('What is his age?');
console.log(age);

alert('let\'s go ahead!! :)');

var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + " " + lastName + " is married");
}
else {
    console.log(firstName + " " + lastName + " will hopefully marry soon");
}

(civilStatus === 'married') ? (console.log(firstName + " " + lastName + " is married")) : (console.log(firstName + " " + lastName + " is single"));

switch (civilStatus) {
    case 'married' : console.log("Be a happy family.");
    case 'single' : console.log("Marry soon :)");
}

