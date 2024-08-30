'use strict';
/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; */

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//function to refactory repeated (message) code
const dispplayMssage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    dispplayMssage('⛔ No Number');

    // when the player wins
  } else if (guess === secreteNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    dispplayMssage('🎉 Correct Number');
    document.querySelector('.number').textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //if the guess is different
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secreteNumber ? '📈To High!' : '📉 To Low';
      dispplayMssage(guess > secreteNumber ? '📈To High!' : '📉 To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game';
      dispplayMssage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff0000';
    }
  }
  //when guess is too high
  // else if (guess > secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈To High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //   }

  //   //when guess is too low
  // } else if (guess < secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 To Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#ff0000';
  //   }
  // }
});

//replay by clicking again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // document.querySelector('.message').textContent = 'Start guessing...';
  dispplayMssage('Start guessing...');
  document.querySelector('.score').textContent = '0';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
