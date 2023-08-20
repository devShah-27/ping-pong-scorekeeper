const p1 = {
    score: 0,
    button: document.querySelector('#p1Update'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Update'),
    display: document.querySelector('#p2Display')
}

let players = [p1, p2]; //useful if there is a need to add more players

const reset = document.querySelector('#reset');
const winningScore = document.querySelector('#winningScore');


// =========================== Game Tracking Variables ==========================================
let goalScore = 5;
let isGameOver = false;


// =============================== Generic Functions =============================================
function gameReset() {
    isGameOver = false;
    for (let p of players) {
        p.score = 0;
        p.display.innerText = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

function updateScores(player, opponent) {
    if (isGameOver == false) {
        player.score += 1;
        if (player.score == goalScore) {
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
    player.display.textContent = player.score;
}


// ================================ Winning Score Setting =====================================
winningScore.addEventListener('change', (e) => {
    goalScore = parseInt(winningScore.value);

    if (winningScore == "") {
        goalScore = 5;
    }
    gameReset();

    console.log("winning score change");
});


// ================================ Player 1 settings =========================================
p1.button.addEventListener('click', (e) => {
    updateScores(p1, p2);
});


// ================================ Player 2 settings =======================================
p2.button.addEventListener('click', (e) => {
    updateScores(p2, p1);
});


// ===================================== Reset settings =======================================
reset.addEventListener('click', gameReset);