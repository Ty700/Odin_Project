function humanChoice(hands){
    for(let i = 0; i < 3; i++){
        console.log(`${i+1}: ` + hands[i])
    }
    
    let player_idx = parseInt(prompt("Pick your hand: (Enter the number 1-3):"));
    
    while(player_idx < 1 || player_idx > 3 || isNaN(player_idx)){
        console.log("Error: Invalid Option.");
        player_idx = parseInt(prompt("Pick your hand: (Enter the number 1-3):"));
    }
    return player_idx -= 1;
}

function computerChoice(){
    return Math.floor(Math.random() * 3);
}

function determineWinner(player_idx, computer_idx){
    if((player_idx + 1) % 3 === computer_idx){
        console.log("You lost!");
    } else if (player_idx === computer_idx) {
        console.log("Tie!");
    } else {
        console.log("You win!");
    }
    console.log(`You had: ${hands[player_idx]}`)
    console.log(`Other Player had: ${hands[computer_idx]}`)
}

const hands = ['Rock', 'Paper', 'Scissors'];
determineWinner(humanChoice(hands), computerChoice());


