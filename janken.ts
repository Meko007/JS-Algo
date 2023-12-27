//jan ken pon => rock paper scissors
const janken = (choice: string) => {
    choice = choice.toLowerCase();
    let compChoice = (Math.floor(Math.random() * 3)) + 1;  //1 for rock, 2 for paper, 3 for scissors
  
    if((choice === "rock" && compChoice === 3) ||
      (choice === "paper" && compChoice === 1) ||
      (choice === "scissors" && compChoice === 2)) return "You win";
    else if((choice === "rock" && compChoice === 1) ||
      (choice === "paper" && compChoice === 2) ||
      (choice === "scissors" && compChoice === 3)) return "A tie";
    else if((choice === "rock" && compChoice === 2) ||
      (choice === "paper" && compChoice === 3) ||
      (choice === "scissors" && compChoice === 1)) return "You lose";
    else return "You can only input rock, paper or scissors";
};
  
//Test cases
// console.log(janken("rock"));
// console.log(janken("paper"));
// console.log(janken("scissors"));
  
  