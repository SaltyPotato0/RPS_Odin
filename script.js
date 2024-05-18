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
    return ComputerChoise;
}

let ComputerChoiceTest = "Computer choise is: " +  getComputerChoise();
console.log(ComputerChoiceTest);


function getUserChoise() {
    let UserChoise = prompt("Choise between rock, paper or scissors");

    if(UserChoise.toLowerCase() == "rock" || UserChoise == "paper" || UserChoise == "sicssors" ){
        return UserChoise;
        
    }
    else { console.log("pick one of 3"); 
            getUserChoise(); 
    }

    
}

