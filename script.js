let rock = 0;
let paper = 0;
let scissors = 0;


function getComputerChoise() {
    let ComputerRandom = Math.floor(Math.random()*3 +1)
    let ComputerChoise;
    if (ComputerRandom == 1){
        console.log("pc choise is rock");
        ComputerChoise = rock; 
        paper +=1
        scissors -=1       
    }
    else if ( ComputerRandom == 2){
        console.log("pc choise is paper");
        ComputerChoise = paper; 
        rock -=1
        scissors +=1      
       
    }
    else {
        ComputerChoise = scissors;
        console.log("pc choise is scissors");
        rock +=1
        paper -=1
    }
    console.log("Computer choise is: " + ComputerChoise);
    return ComputerChoise;
   

}






function getUserChoise() {
    let UserChoise;
    let UserChoiseString = prompt("Choise between rock, paper or scissors");
    UserChoiseString = UserChoiseString.toLowerCase();
    if(UserChoiseString == "rock" ){
        UserChoise = rock;
        console.log("user choise is rock");
        paper +=1
        scissors -=1 
        return UserChoise;  
        
    }

    else if (UserChoiseString == "paper") {
        UserChoise = paper;
        console.log("user choise is paper");
        rock -=1
        scissors +=1  
        return UserChoise;   
    }

    else if (UserChoiseString == "scissors"){
        UserChoise = scissors;
        console.log("user choise is scissors");
        rock +=1
        paper -=1
        return UserChoise;
    }

    else { console.log("pick one of 3"); 
           
        
          return  getUserChoise();
        } 

    
}


let ComputerScore = 0;
let UserScore = 0;

function CurrentScore() {
    rock = 0;
    paper = 0;
    scissors = 0;
    console.log("Computer score is " + ComputerScore);
    console.log("User score is " + UserScore);
}

/* Mozda da se promeni sa nekim loopom? */
function playRounds() {
    if ( ComputerScore === 3) {
        alert("computer is the winner")
        ComputerScore = 0;
        UserScore = 0;
    }
    else if (UserScore === 3) {
        alert("Gz u win");
        ComputerScore = 0;
        UserScore = 0;
    }

    else { playRound();}
    
}

function playRound() {
    let ComputerChoise = getComputerChoise();
    let UserChoise = getUserChoise();
    console.log("User choise is: " + UserChoise);

    if (UserChoise < ComputerChoise){
        ComputerScore +=1
        CurrentScore();
        playRounds();
        
    }
    else if (UserChoise > ComputerChoise) {
        UserScore +=1
        CurrentScore();
        playRounds();
    }
    else { console.log("It's a draw ");
           CurrentScore();
          
           playRounds();
}
    
}

playRound();
