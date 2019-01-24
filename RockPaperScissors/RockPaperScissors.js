const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log(`Invalid choice: ${userInput}`);
  }
};

function getComputerChoice() {
	number = Math.floor(Math.random() * 3);
	switch (number) {
		case 2 :
			return 'rock';
			break; 
		case 1 :
			return 'paper';
			break;
		case 0 :
			return 'scissors';
			break;
  }
}

function determineIfTie(userChoice, computerChoice) {
	if (userChoice === computerChoice){
		return true;
	}else{
		return false;
	}
}

function determineWinner(userChoice, computerChoice) {
	switch (userChoice) {
		case 'rock':
			if(computerChoice === 'paper'){
				return false;
			}else{
				return true;
			}
			break;
		case 'paper' :
			if(computerChoice === 'scissors'){
				return false;
			}else{
				return true;
			}
			break;
		case 'scissors' :
			if(computerChoice === 'rock'){
				return false;
			}else{
				return true;
			}
			break;
		case 'bomb' :
			return true;
			break;
	}
}

function playGame(){
  userChoice = getUserChoice('Paper');
  console.log(`User chose: ${userChoice}`);
  computerChoice = getComputerChoice();
  console.log(`Computer chose: ${computerChoice}`);
  
  console.log('');
  
  if(determineIfTie(userChoice, computerChoice)){
    console.log(`It's a tie!!!`);
  }else{
    if(determineWinner(userChoice, computerChoice)){
      console.log(`Player Wins!!!`);
    }else{
      console.log(`Computer Wins!!!`);
    }
	}
}

playGame();