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

civilStatus = 'none';

switch (civilStatus) {
    case 'married' : console.log("Be a happy family.");
                     break;
    case 'single' :  console.log("Marry soon :)");
                     break;
    default:         console.log("I guess you are a student");
}

switch (true) {
    case age > 20 : console.log("You're no more a teen!");
                    break;
    case age > 10 && age < 20 : console.log("Hi teen, how are you doing?");
                                break;
    case age <= 10 : console.log("hi child!!");
    default : console.log("you're a human");
}

var height = 0;

height ? console.log('height is 0') : console.log('height is not 0');
height || height === 0 ? console.log('height is 0') : console.log('height is not 0');

height = 25;
if (height == '25')  //comparing variable to a string, so string value is converted to number before comparison
    console.log('== operator does type coercion');
else
    console.log('== operator found tht values are not equal, does not bother about type');


if (height === '25')  //type checking before comparison
    console.log('=== operator found that compared values are equal along with data type');
else
    console.log('=== operator found that compared values are not equal');


