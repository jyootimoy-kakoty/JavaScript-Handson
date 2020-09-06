console.log('Hello JavaScript!');

var firstName = "Jyootimoy";
var lastName = "Kakoty";

console.log("Hello!! " + firstName + " " + lastName);

/*
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
*/

/* equality operators */
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

/* function Statement */
function calculateAge (birthYear) {
    return 2020 - birthYear;
}

var Jim = calculateAge(1985);
var Subham = calculateAge(1996);
var Raj = calculateAge(1993);

console.log(Jim, Subham, Raj);

/* function expressions */
var whatIsYourJob = function(job, firstName) {
    switch(job) {
        case 'IT': return firstName + ' is a IT professional';
        case 'teacher': return firstName + ' teaches students';
        case 'labour': return firstName + ' is a wage worker';
        case 'business': return firstName + ' is a businessman';
        default: return firstName + ' is self-employed';
    }
}

console.log(whatIsYourJob('teacher', 'Shyam'));
console.log(whatIsYourJob('IT', 'Jyotimoy'));
console.log(whatIsYourJob('Business', 'Bicky'));
console.log(whatIsYourJob('business', 'Bicky'));
console.log(whatIsYourJob('labour', 'Madan'));


/* Array */
var color = ['red', 'green', 'black'];
var item = new Array('box', 'pencil', 'pen');

console.log('color of ' + item[0] + ' is ' + color[0]);
console.log('color of ' + item[1] + ' is ' + color[1]);
console.log('color of ' + item[2] + ' is ' + color[2]);
console.log('no. of items in item: ' + item.length);


