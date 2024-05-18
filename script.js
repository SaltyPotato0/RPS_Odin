

function getComputerChoise() {
    let ComputerChoise = Math.floor(Math.random()*3 +1)
    
    if (ComputerChoise == 1){
        ComputerChoise = "rock";        
    }
    else if ( ComputerChoise == 2){
        ComputerChoise = "paper";       
    }
    else {
        ComputerChoise = "scissors";
    }
    console.log("Computer choise is: " + ComputerChoise);
    return ComputerChoise;
   

}






function getUserChoise() {
    let UserChoise = prompt("Choise between rock, paper or scissors");

    if(UserChoise == "rock" || UserChoise == "paper" || UserChoise == "scissors" ){
        return UserChoise;
        
    }
    else { console.log("pick one of 3"); 
          return  getUserChoise();
    }
}


let ComputerScore = 0;
let UserScore = 0;

/* Mozda da se promeni sa nekim loopom? */
function playRounds() {
    if ( ComputerScore === 3) {
        alert("computer is the winnder")
        ComputerScore = 0;
        UserScore = 0;
    }
    else if (UserScore === 3) {
        alert("Gz u win")
        ComputerScore = 0;
        UserScore = 0;
    }

    else { playRound();}
}

function playRound() {
    let ComputerChoise = getComputerChoise();
    let UserChoise = getUserChoise();
    console.log("User choise is: " + UserChoise);

    if ( ComputerChoise == "rock" && UserChoise.toLowerCase() == "rock"){
        console.log("it's a draw, play again");  
        playRounds();
    }
    else if (ComputerChoise == "rock" && UserChoise.toLowerCase() == "paper"){
        UserScore+=1;
        console.log("User " + UserScore + " vs " + "Comp " + ComputerScore);
        playRounds();
    }

    else if (ComputerChoise == "rock" && UserChoise.toLowerCase() == "scissors"){
        ComputerScore+=1;
        console.log("User " + UserScore + " vs " + "Comp " + ComputerScore);
        playRounds();
    }

    else if ( ComputerChoise == "paper" && UserChoise.toLowerCase() == "paper"){
        console.log("it's a draw, play again");  
        playRounds();
    }
    else if (ComputerChoise == "paper" && UserChoise.toLowerCase() == "scissors"){
        UserScore+=1;
        console.log("User " + UserScore + " vs " + "Comp " + ComputerScore);
        playRounds();
    }

    else if (ComputerChoise == "paper" && UserChoise.toLowerCase() == "rock"){
        ComputerScore+=1;
        console.log("User " + UserScore + " vs " + "Comp " + ComputerScore);
        playRounds();
    }

    else if ( ComputerChoise == "scissors" && UserChoise.toLowerCase() == "scissors"){
        console.log("it's a draw, play again");  
        playRounds();
    }
    else if (ComputerChoise == "scissors" && UserChoise.toLowerCase() == "rock"){
        UserScore+=1;
        console.log("User " + UserScore + " vs " + "Comp " + ComputerScore);
        playRounds();
    }

    else if (ComputerChoise == "scissors" && UserChoise.toLowerCase() == "paper"){
        ComputerScore+=1;
        console.log("User " + UserScore + " vs " + "Comp " + ComputerScore);
        playRounds();
    }
}

playRound();
