let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
}); 

guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);

  if( isNaN(guess) || guess < min || guess > max)
    setMessage(`Please enter a number between ${min} and ${max}`,'red');


  if(guess === winningNum)
  {
    gameOver(true,`${winningNum} is correct, YOU WIN`);
  }
  else{
    guessesLeft -=1;
    if(guessesLeft === 0)
    {
      gameOver(true,`Game Over, you lost. The correct number was ${winningNum}`);
    }
    else
    {
      gameOver(false,`${guess} is not correct, ${guessesLeft} guesses left`);
    }

  }


});

function setMessage(msg,color)
{
  message.textContent = msg;
  message.style.color = color;
}

function gameOver(won,msg)
{
      let color;

      won === true ? guessInput.disabled = true : guessInput.value='';
      
      won === true ? (guessesLeft == 0 ? color = 'red' : color ='green') : color='red';

      guessInput.style.borderColor = color;
      setMessage(msg,color);

      if(won === true){
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
      }
      
}

function getRandomNum(min,max)
{
  return (Math.floor(Math.random()*(max-min+1)+min));
}