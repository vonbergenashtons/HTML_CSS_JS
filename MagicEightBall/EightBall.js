let userName = '';
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello stranger!`);

const userQuestion = 'Does Braden love dudes?';

userName ? console.log(`${userName} asked: ${userQuestion}`) :console.log(`Stranger asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
// console.log(`Random number chosen: ${randomNumber}`)

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Error';
    break;
}

console.log(`The magic eight ball states: ${eightBall}...`);