'use strict';

let hs = 0;
let score = 20;

let secretNo = Math.floor(Math.random() * 20) + 1;

const dm = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //no no entered
    dm('⛔No Number entered!');

    // correct guess
  } else if (guess === secretNo) {
    dm('YaY!! 🥳🤸🏽‍♂️');

    // display correct num
    document.querySelector('.number').textContent = secretNo;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > hs) {
      hs = score;

      document.querySelector('.highscore').textContent = hs;
    }

    // guess greater than secret no
  } else if (guess !== secretNo) {
    if (score > 1) {
      dm(
        guess > secretNo
          ? '📈 Too high, Try again 😔'
          : '📉 Too low, Try again 😔'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dm('GAME OVER, Try again 😔');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.addEventListener('keypress', function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    document.querySelector('.check').click();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNo = Math.floor(Math.random() * 20) + 1;

  dm('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
