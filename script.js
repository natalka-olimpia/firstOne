const player1 = 'fa-circle-o';
const player2 = 'fa-times';
let round = 1;
const board = [
    ['','',''],
    ['','',''],
    ['','','']
];

const combinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const boxes = [...document.querySelectorAll('.box')];
boxes.forEach(box => box.addEventListener('click', btn));
document.querySelector('.box').addEventListener('click', btn);
function btn(event) {
    const { row, column } = event.target.dataset;
    const turn = round % 2 === 0 ? player2 : player1;
    if (board[row][column] !== '') return;
    event.target.classList.add(turn);
    board[row][column] = turn;
    round++;

    console.log(check());
}

function check() {
    const result = board.reduce((total, row) => total.concat(row));
    let winner = null;
    let moves = {
        'fa-times': [],
        'fa-circle-o': []
    };
    result.forEach((field, index) => moves[field] ? moves[field].push(index) : null);
    combinations.forEach(combination => {
        if (combination.every(index => moves[player1].indexOf(index) > -1)) {
            winner = 'Winner: Player 1';
        }
        if (combination.every(index => moves[player2].indexOf(index) > -1)) {
            winner = 'Winner: Player 2';
        }
    });

    return winner;
}


/*
const round = 0;
const computerTurn = math.floor(Math.random()*9);
const boxes = document.querySelectorAll{'.box'});

1. Klikasz któreś pole o id od p0 do p8
2. Komputer odklikuje dowolne inne puste pole od p0 do p8
3. Znowu twój ruch

function answer() {
(document.querySelector('#p' + computerTurn).innerHTML = " ") ? document.querySelector('#p' + computerTurn).innerHTML = 'fa-circle-o' : document.querySelector('#p' + computerTurn).innerHTML = "fa-times;
}
for (round = 0; round <8; round ++){
boxes.addEventListener("click", answer);
console.log(check());
}
function check() {
 if (
 (p0='fa-circle-o' && p1='fa-circle-o' && p2='fa-circle-o') ||
 (p3='fa-circle-o' && p4='fa-circle-o' && p5='fa-circle-o') ||
 (p6='fa-circle-o' && p7='fa-circle-o' && p8='fa-circle-o') ||
 (p0='fa-circle-o' && p3='fa-circle-o' && p6='fa-circle-o') ||
 (p1='fa-circle-o' && p4='fa-circle-o' $$ p7='fa-circle-o') ||
 (p2='fa-circle-o' && p5='fa-circle-o' && p8='fa-circle-o') ||
 (p0='fa-circle-o' && p4='fa-circle-o' && p8='fa-circle-o') ||
 (p2='fa-circle-o' && p4='fa-circle-o' && p6='fa-circle-o')) {
 alert ("Wygrałeś!");
} else { alert ("Przegrałeś")
}}
*/