let userName = prompt('Approach me and speak your name puny mortal'  );

userName ? console.log(`Speak ${userName}!`) : console.log('speak mortal!');

let userQuestion = prompt("Ask me your query and pray it isn't the last thing you do. " );

console.log(`${userName} has asked -${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 3);

console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'I do not dabble in dealings of insects. ';
    break;
  case 1:
    eightBall = 'I will answer for your soul. Deal? ';
    break;
    case 2:
     eightBall = 'I have grown tired of you. Leave while I allow it.';

}

document.getElementById('answer').textContent = `Shoggoth voice echoes in your mind: ${eightBall}`;
