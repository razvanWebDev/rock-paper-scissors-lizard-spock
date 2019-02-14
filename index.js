var rock = document.getElementById('r');
var paper = document.getElementById('p');
var scissors = document.getElementById('s');
var lizard = document.getElementById('l');
var spock = document.getElementById('q');

var userScore_span = document.getElementById('user-score');
var compScore_span = document.getElementById('comp-score');
var userScore = 0;
var compScore = 0;

result_p = document.getElementById('result');


function getCompChoice(compChoice){
    compChoice = ['r', 'p', 's', 'l', 'q']
    var rndm = Math.floor(Math.random()*5);
    return compChoice[rndm];
}

function fullWord(letter) {
    if(letter === 'r'){
        return 'Rock'
    } else if(letter === 'p'){
        return 'Paper'
    }else if(letter === 's'){
        return 'Scissors'
    }else if (letter === 'l'){
        return 'Lizard'
    }else if (letter === 'q'){
        return 'Spock'
    }
}


function win(userChoice, computerChoice){
 userScore++;
result_p.innerHTML = fullWord(userChoice) + " beats " + fullWord(computerChoice) + "<br> You win!"

}

function lose(userChoice, computerChoice){
    compScore++;
    result_p.innerHTML = fullWord(userChoice) + " loses to " + fullWord(computerChoice) + "<br> You lose!"
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = fullWord(userChoice) + " equals to " + fullWord(computerChoice) + "<br> It's a draw!"
}

function game(userChoice, computerChoice){
    computerChoice = getCompChoice();

    switch(userChoice + computerChoice){
        //winers
        case 'sp':
        case 'pr':
        case 'rl':
        case 'lq':
        case 'qs':
        case 'sl':
        case 'lp':
        case 'pq':
        case 'qr':
        case 'rs':
        win(userChoice, computerChoice);
        break;

        // lozers
        case 'ps':
        case 'rp':
        case 'lr':
        case 'ql':
        case 'sq':
        case 'ls':
        case 'pl':
        case 'qp':
        case 'rq':
        case 'sr':
        lose(userChoice, computerChoice);
        break;

        //draws
        case 'rr':
        case 'pp':
        case 'ss':
        case 'll':
        case 'qq':
        draw(userChoice, computerChoice);
        break;
    }

    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

}


function initEevents() {
    rock.addEventListener('click', function(){
        game('r');
    })

    paper.addEventListener('click', function(){
        game('p');;
    })

    scissors.addEventListener('click', function(){
        game('s');;
    })

    lizard.addEventListener('click', function(){
        game('l');;
    })

    spock.addEventListener('click', function(){
        game('q');;
    })
}




initEevents();