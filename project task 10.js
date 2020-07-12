const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' || userInput === 'bomb') {
        return userInput;
      } else {
        console.log('Error!');
     }
    }
   
   function getComputerChoice() {
     
     
     switch (Math.floor(Math.random() * 3)) {
       case 0:
         return 'rock';
       case 1:
         return 'paper';
       case 2:
         return 'scissor';
       }
   }
   function playGame() {
    let userChoice = getUserChoice('bombgdhg');
    const computerChoice = getComputerChoice(); 
    console.log('You had: ' + userChoice);
    console.log('The computer had: ' + computerChoice);
          console.log(determineWinner(userChoice,computerChoice));
  }  
  playGame();  
   function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
      
    else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
         return 'computer won!';
      } else {
         return 'you won!';
      } 
     } 
     else if (userChoice === 'paper'){
         if (computerChoice === 'scissor') {
             return 'computer won!';
         } else {
             return 'you won!';
        }
     }
     else if (userChoice === 'scissor') {
         if (computerChoice === 'rock') {
             return 'computer won!' ;
         } else {
             return 'you Won!';
         }
     } 
     else if (userChoice === 'bomb') {
         return 'you won!';
     } 
     else {
         return 'ghnta chidkya';
     }

     }
  
