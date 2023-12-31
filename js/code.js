function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// 1=ROCK/2=PAPER/3=SCISSORS
function choice(move) {
    let result = ''
    if(move == 1) {
        result = 'ROCK 🥌'
    } else if(move == 2) {
        result = 'PAPER 📰'
    } else if(move == 3) {
        result = 'SCISSORS ✂'
    } else {
        result = 'BAD CHOSEN 😓'
    } 
    return result 
}

let player = 0
let pc = 0
let wins = 0
let loses = 0

while (wins < 3 && loses < 3) {                
    pc = random(1,3)
    player = prompt('Choose: 1 for rock, 2 for paper, 3 for scissors')
    // alert('Chose ' + player)
    
    alert('PC chose: ' + choice(pc))
    alert('You chose: ' + choice(player))
    
    //COMBAT
    if(pc == player) {
        alert('TIE 😐')
    } else if(player == 1 && pc == 3) {
        alert('YOU WIN 🥳')
        wins = wins + 1
    } else if(player == 2 && pc == 1) {
        alert('YOU WIN 🥳')
        wins = wins + 1
    } else if(player == 3 && pc == 2) {
        alert('YOU WIN 🥳')
        wins = wins + 1
    } else {
        alert('YOU LOSE 😭')
        loses = loses + 1
    }
}

alert('WINS: ' + wins + ' times. LOSES: ' + loses + ' times.')